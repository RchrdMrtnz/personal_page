---
title: How I built an AI voice agent that responds in under 800 ms
description: Architecture of a production AI phone assistant: Pipecat, Deepgram, GPT-4.1-mini and Cartesia, PSTN ↔ WebRTC telephony and JSON-defined flows.
date: 2026-10-28
tags: Pipecat, Voice agents, LLM, WebRTC, FastAPI
draft: false
---

On a phone call, silence feels long. If an AI assistant takes two seconds to answer, the person on the other end repeats the question, gets impatient or hangs up. So when I built a production AI phone assistant end to end—one that now serves **10 different clients** and over **5,000 call minutes a month**—latency was the requirement that drove almost every decision.

This article covers the architecture and what I learned along the way.

## The pipeline: STT → LLM → TTS

A voice conversation with AI has three stages:

1. **Speech-to-text (STT):** transcribe what the person says. I used **Deepgram**.
2. **LLM:** understand the intent and generate the reply. I used **GPT-4.1-mini**, which strikes a good balance between quality and speed.
3. **Text-to-speech (TTS):** turn the reply into speech. I used **Cartesia**.

To orchestrate them I used **[Pipecat](https://github.com/pipecat-ai/pipecat)**, a Python framework built for real-time voice agents. Pipecat models everything as a pipeline of *frames*, so each stage can start working without waiting for the previous one to finish. With this design, end-to-end response time stays **under 800 ms**.

## Turn-taking and interruptions

Answering fast isn't enough: the agent also has to know **when** to speak. For that I combined three pieces:

- **VAD (voice activity detection):** tells apart someone speaking from background noise.
- **End-of-turn detection:** decides when the person has finished their thought, so the agent doesn't cut them off mid-sentence.
- **Barge-in:** if the person interrupts while the agent is talking, the agent stops and listens. Without it, the conversation feels like talking to an answering machine.

## Getting the voice onto the phone

The least glamorous part—and one of the hardest—was connecting the AI to real phone lines. Audio has to travel between the traditional phone network (**PSTN**), **WebRTC** and the **WebSockets** the pipeline consumes.

To solve it I built a **telephony broker** that drives a *headless* Chromium with **Playwright**, running **RingCentral**'s SIP/WebRTC WebPhone. The broker relays audio between the call and the pipeline, with a **custom PCM/WAV frame serializer** so the audio arrives in exactly the format each side expects.

The whole system runs as **4 Docker microservices** (FastAPI, Express, NestJS and the headless browser).

## Configurable flows without touching code

With 10 clients, each with its own script, hand-coding every flow didn't scale. I designed an **API-driven conversational flow engine**: flows are described in **JSON** and the system generates the LLM nodes and *handlers* at runtime. Shipping a new flow no longer requires a code deploy.

On top of that engine I added:

- **Episodic memory**, so the agent remembers what was said earlier in the conversation.
- **Per-client identity** (multi-tenant): each client has its own identity, flows and data.
- **Prompt-injection protection**, so nobody can "talk" the agent out of its role.

## Measure to improve

You can't optimize what you don't measure. I implemented **real-time observability**: live transcription of every call, plus **TTFB** (time to first byte of audio) and **token usage** metrics. That makes it easy to spot which pipeline stage is adding latency or cost.

## What I learned

- **Latency is an end-to-end budget.** Optimizing a single stage does little if another one eats the margin; you have to measure the full path.
- **Explicit flows over one giant prompt.** The LLM handles the language; business rules live in the flow, where they can be reviewed and versioned.
- **Telephony is half the project.** The model is the visible part, but reliability depends on how the audio travels.

---

If you're thinking about adding a voice agent to your business, [this page](/en/services/ai-voice-agents) explains how I approach these projects, or you can [reach out directly](/en/contact).
