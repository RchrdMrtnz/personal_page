---
title: Cómo construí un agente de voz con IA que responde en menos de 800 ms
description: Arquitectura de un asistente telefónico con IA en producción: Pipecat, Deepgram, GPT-4.1-mini y Cartesia, telefonía PSTN ↔ WebRTC y flujos definidos en JSON.
date: 2026-10-28
tags: Pipecat, Agentes de voz, LLM, WebRTC, FastAPI
draft: false
---

En una llamada telefónica, el silencio pesa. Si un asistente con IA tarda dos segundos en responder, la persona del otro lado repite la pregunta, se impacienta o cuelga. Por eso, cuando me tocó construir de punta a punta un asistente telefónico con IA para producción —hoy atiende a **10 clientes distintos** y más de **5.000 minutos de llamadas al mes**—, la latencia fue el requisito que guió casi todas las decisiones.

Este artículo resume la arquitectura y lo que aprendí en el camino.

## El pipeline: STT → LLM → TTS

Una conversación por voz con IA tiene tres etapas:

1. **Speech-to-text (STT):** transcribir lo que dice la persona. Usé **Deepgram**.
2. **LLM:** entender la intención y generar la respuesta. Usé **GPT-4.1-mini**, que ofrece un buen equilibrio entre calidad y velocidad.
3. **Text-to-speech (TTS):** convertir la respuesta en voz. Usé **Cartesia**.

Para orquestarlas usé **[Pipecat](https://github.com/pipecat-ai/pipecat)**, un framework de Python pensado para agentes de voz en tiempo real. Pipecat organiza todo como un pipeline de *frames*, lo que permite que cada etapa empiece a trabajar sin esperar a que la anterior termine por completo. Con este diseño, el tiempo de respuesta completo se mantiene **por debajo de 800 ms**.

## Turnos e interrupciones

Responder rápido no alcanza: el agente también tiene que saber **cuándo** hablar. Para eso combiné tres piezas:

- **VAD (detección de actividad de voz):** distingue cuándo hay alguien hablando y cuándo es solo ruido.
- **Detección de fin de turno:** decide cuándo la persona terminó su idea, para no cortarla a mitad de frase.
- **Barge-in:** si la persona interrumpe mientras el agente habla, el agente se calla y escucha. Sin esto, la conversación se siente como hablar con un contestador automático.

## Llevar la voz al teléfono

La parte menos glamorosa —y una de las más difíciles— fue conectar la IA con líneas telefónicas reales. El audio tiene que viajar entre la red telefónica tradicional (**PSTN**), **WebRTC** y los **WebSockets** que consume el pipeline.

Para resolverlo construí un **broker de telefonía** que orquesta un Chromium *headless* con **Playwright**, donde corre el WebPhone SIP/WebRTC de **RingCentral**. El broker hace de relé de audio entre la llamada y el pipeline, con un **serializador de frames PCM/WAV propio** para que el formato del audio llegue exactamente como lo espera cada lado.

Todo el sistema corre como **4 microservicios en Docker** (FastAPI, Express, NestJS y el navegador *headless*).

## Flujos configurables sin tocar código

Con 10 clientes, cada uno con su propio guion, programar cada flujo a mano no escalaba. Diseñé un **motor de flujo conversacional dirigido por API**: los flujos se describen en **JSON** y el sistema genera los nodos y *handlers* del LLM en tiempo de ejecución. Publicar un flujo nuevo ya no requiere desplegar código.

Sobre ese motor agregué:

- **Memoria episódica**, para que el agente recuerde lo que se habló en la conversación.
- **Identidad por cliente** (multi-inquilino): cada cliente tiene su propia identidad, flujos y datos.
- **Protección contra inyección de prompts**, para que nadie pueda "convencer" al agente de salirse de su rol.

## Medir para poder mejorar

No se puede optimizar lo que no se mide. Implementé **observabilidad en tiempo real**: transcripción en vivo de cada llamada y métricas de **TTFB** (tiempo hasta el primer byte de audio) y **consumo de tokens**. Con eso es fácil detectar qué etapa del pipeline está sumando latencia o costo.

## Lo que aprendí

- **La latencia es un presupuesto de punta a punta.** Optimizar una sola etapa sirve de poco si otra se come el margen; hay que medir el recorrido completo.
- **Flujos explícitos antes que un prompt gigante.** El LLM se encarga del lenguaje; las reglas del negocio viven en el flujo, donde se pueden revisar y versionar.
- **La telefonía es la mitad del proyecto.** El modelo es la parte visible, pero la confiabilidad depende de cómo viaja el audio.

---

Si estás pensando en sumar un agente de voz a tu negocio, en [esta página](/es/services/ai-voice-agents) explico cómo trabajo en este tipo de proyectos, o puedes [escribirme directamente](/es/contact).
