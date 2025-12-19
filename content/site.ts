import { Bot, Workflow, Database, Cpu, Zap, Activity, Server, TrendingUp } from "lucide-react";

export const siteConfig = {
    profile: {
        name: "Richard Pedraza",
        role: {
            en: "Full-Stack Developer & Automation Engineer | AI-enabled systems that scale and deliver ROI",
            es: "Full-Stack Developer & Automation Engineer | Sistemas con IA y automatización que escalan y generan ROI",
        },
        differentiator: {
            en: "I don’t just ship code—I design architectures that solve business-critical problems with clarity and speed.",
            es: "No solo envío código: diseño arquitecturas que resuelven problemas críticos de negocio con claridad y velocidad.",
        },
        links: {
            linkedin: "https://www.linkedin.com/in/rchrd-pdrz1993/",
            github: "https://github.com/RchrdMrtnz",
            email: "mailto:rchrd.pdrz.mrtnz@gmail.com",
            medium: "https://medium.com/@rchrd.pdrz.mrtnz",
            telegram: "https://t.me/rchrd_am",
            resume: {
                en: "https://github.com/RchrdMrtnz/personal_page/blob/main/CV/RICHARD-PEDRAZA-EN.pdf",
                es: "https://github.com/RchrdMrtnz/personal_page/blob/main/CV/RICHARD-PEDRAZA-ES.pdf",
            },
        },
    },

    topSkills: ["TypeScript", "Next.js", "Python", "AWS", "RAG", "n8n"],

    services: [
        {
            icon: Bot,
            title: { en: "LLM Integrations", es: "Integraciones LLM" },
            desc: {
                en: "Custom AI agents, RAG pipelines, and structured outputs aligned with real business logic.",
                es: "Agentes de IA personalizados, pipelines RAG y salidas estructuradas alineadas con lógica real de negocio.",
            },
        },
        {
            icon: Workflow,
            title: { en: "Workflow Automation", es: "Automatización de Flujos" },
            desc: {
                en: "End-to-end automation replacing manual operations with resilient, scalable systems.",
                es: "Automatización de extremo a extremo que reemplaza operaciones manuales por sistemas resilientes y escalables.",
            },
        },
        {
            icon: Database,
            title: { en: "Data Pipelines", es: "Pipelines de Datos" },
            desc: {
                en: "Reliable ingestion, processing, and enrichment pipelines built for operational scale.",
                es: "Pipelines confiables de ingesta, procesamiento y enriquecimiento diseñados para escalar operaciones.",
            },
        },
        {
            icon: Cpu,
            title: { en: "Backend Architecture", es: "Arquitectura Backend" },
            desc: {
                en: "System architecture designed for performance, maintainability, and controlled technical debt.",
                es: "Arquitectura de sistemas diseñada para rendimiento, mantenibilidad y deuda técnica controlada.",
            },
        },
    ],

    heroMetrics: [
        { label: { en: "Efficiency Boost", es: "Aumento de Eficiencia" }, value: "+73%", icon: Zap, color: "text-cyan-400", percentage: 80 },
        { label: { en: "Requests/Week", es: "Peticiones/Semana" }, value: "25k", icon: Activity, color: "text-indigo-400", percentage: 70 },
        { label: { en: "Uptime", es: "Disponibilidad" }, value: "99.9%", icon: Server, color: "text-purple-400", percentage: 90 },
        { label: { en: "Latency Reduction", es: "Reducción de Latencia" }, value: "-35%", icon: TrendingUp, color: "text-emerald-400", percentage: 60 },
    ],

    metrics: [
        {
            id: "processing-time",
            value: "73%",
            label: { en: "Reduced data processing time", es: "Reducción en tiempo de procesamiento" },
            detail: { en: "30 min → under 8 min", es: "30 min → menos de 8 min" },
        },
        {
            id: "ingestion-scale",
            value: "25k+",
            label: { en: "Records ingested/week", es: "Registros procesados/semana" },
            detail: { en: "99.3% accuracy", es: "99.3% de precisión" },
        },
        {
            id: "csv-automation",
            value: "10m",
            label: { en: "CSV workflow duration", es: "Duración flujo CSV" },
            detail: { en: "Reduced from 1 hour", es: "Reducido de 1 hora" },
        },
        {
            id: "valuation-engine",
            value: "<2m",
            label: { en: "Decision turnaround time", es: "Tiempo de toma de decisión" },
            detail: { en: "Reduced from days to minutes", es: "Reducido de días a minutos" },
        },
    ],

    experience: [
        {
            company: "Technology & Automation Projects",
            role: { en: "Full-Stack & AI Engineer", es: "Ingeniero Full-Stack e IA" },
            period: "2023 – Present",
            description: {
                en: "Designed and delivered end-to-end software systems focused on automation, AI integration, and operational efficiency across multiple business domains.",
                es: "Diseñé y desarrollé sistemas de software de punta a punta enfocados en automatización, integración de IA y eficiencia operativa en múltiples dominios de negocio.",
            },
        },
        {
            company: "Automation & AI Consulting",
            role: { en: "Automation Engineer", es: "Ingeniero de Automatización" },
            period: "2024 – Present",
            description: {
                en: "Built automation infrastructures combining Python, n8n, and AI services to replace manual workflows and enable scalable operations.",
                es: "Construí infraestructuras de automatización combinando Python, n8n y servicios de IA para reemplazar flujos manuales y habilitar operaciones escalables.",
            },
        },
        {
            company: "AI Decision Systems",
            role: { en: "AI Systems Developer", es: "Desarrollador de Sistemas de IA" },
            period: "2025",
            description: {
                en: "Developed configurable AI-based decision systems for screening, ranking, and automated communication, adaptable to different industries and business rules.",
                es: "Desarrollé sistemas de decisión con IA configurables para filtrado, ranking y comunicación automatizada, adaptables a distintas industrias y reglas de negocio.",
            },
        },
    ],

    caseStudies: [
        {
            id: "academic-content-ai",
            title: { en: "Automated Academic Content Generation", es: "Generación Automatizada de Contenido Académico" },
            description: {
                en: "AI-driven pipeline that generates, reviews, and updates academic content using GPT and n8n with semantic validation and version control.",
                es: "Pipeline impulsado por IA que genera, revisa y actualiza contenido académico usando GPT y n8n con validación semántica y control de versiones.",
            },
            tags: ["GPT", "n8n", "Content Automation"],
            stats: { en: "Content cycles reduced from weeks to days", es: "Ciclos de contenido reducidos de semanas a días" },
            image: "/projects/academic.jpg",
        },
        {
            id: "voice-ai-platform",
            title: { en: "Real-Time Voice AI Platform", es: "Plataforma de IA por Voz en Tiempo Real" },
            description: {
                en: "Voice-based AI system using WebRTC, AssemblyAI, OpenAI and ElevenLabs for live transcription, contextual responses, and automated summaries.",
                es: "Sistema de IA por voz usando WebRTC, AssemblyAI, OpenAI y ElevenLabs para transcripción en vivo, respuestas contextuales y resúmenes automáticos.",
            },
            tags: ["WebRTC", "Streaming AI", "Voice Agents"],
            stats: { en: "Automated inbound call handling", es: "Automatización de llamadas entrantes" },
            image: "/projects/voice-ai.jpg",
        },
        {
            id: "recruitment-ai-engine",
            title: { en: "AI-Based Recruitment Decision Engine", es: "Motor de Decisión para Reclutamiento con IA" },
            description: {
                en: "Flexible AI system to filter, rank, and follow up with candidates using LLMs and configurable business rules, adaptable to multiple industries.",
                es: "Sistema de IA flexible para filtrar, rankear y dar seguimiento a candidatos usando LLMs y reglas de negocio configurables, adaptable a múltiples industrias.",
            },
            tags: ["LLMs", "Decision Systems", "Automation"],
            stats: { en: "Up to 70% reduction in manual screening effort", es: "Hasta 70% de reducción en esfuerzo de preselección manual" },
            image: "/projects/recruitment.jpg",
        },
        {
            id: "ai-video-automation",
            title: { en: "Automated AI Video Production", es: "Producción Automatizada de Video con IA" },
            description: {
                en: "End-to-end automated video creation pipeline combining image generation, AI voice synthesis, and automated composition tools.",
                es: "Pipeline de creación de video totalmente automatizado combinando generación de imágenes, síntesis de voz con IA y herramientas de composición automática.",
            },
            tags: ["Generative AI", "Video Automation"],
            stats: { en: "Zero manual video editing", es: "Edición manual eliminada" },
            image: "/projects/video.jpg",
        },
    ],

    consulting: {
        title: { en: "AI Consulting & System Design", es: "Consultoría e Integración de IA" },
        pitch: {
            en: "I help companies integrate AI in a practical, reliable, and business-aligned way—focused on operational impact, not experimentation.",
            es: "Ayudo a empresas a integrar IA de forma práctica, confiable y alineada al negocio, enfocada en impacto operativo real y no en experimentación.",
        },
        services: [
            { en: "AI opportunity assessment and feasibility analysis", es: "Evaluación de oportunidades de IA y viabilidad técnica" },
            { en: "Design of AI-enabled decision and automation systems", es: "Diseño de sistemas de decisión y automatización con IA" },
            { en: "LLM, workflow and system integration", es: "Integración de LLMs, flujos y sistemas existentes" },
            { en: "Scalability, cost control and maintainability guidance", es: "Acompañamiento en escalabilidad, control de costos y mantenibilidad" },
        ],
        outcome: {
            en: "Clear technical roadmap and AI systems ready to operate and scale.",
            es: "Hoja de ruta técnica clara y sistemas de IA listos para operar y escalar.",
        },
        cta: { en: "Explore AI Consulting", es: "Explorar Consultoría en IA" },
    },

    problems: {
        title: { en: "Common Business Problems", es: "Problemas Comunes de Negocio" },
        items: [
            { en: "Manual processes that no longer scale.", es: "Procesos manuales que ya no escalan." },
            { en: "Disconnected systems without operational visibility.", es: "Sistemas desconectados sin visibilidad operativa." },
            { en: "Data without actionable intelligence.", es: "Datos sin inteligencia accionable." },
            { en: "Operational dependency on key individuals.", es: "Dependencia operativa de personas clave." },
            { en: "Slow execution caused by repetitive tasks.", es: "Ejecución lenta por tareas repetitivas." },
        ],
    },

    entryOffer: {
        title: { en: "How We Start", es: "Cómo Empezamos" },
        description: {
            en: "Focused technical discovery to identify automation opportunities and high-impact quick wins.",
            es: "Diagnóstico técnico enfocado para identificar oportunidades de automatización y quick wins de alto impacto.",
        },
        deliverable: {
            en: "A prioritized automation roadmap with measurable impact.",
            es: "Hoja de ruta de automatización priorizada con impacto medible.",
        },
    },

    trust: {
        documentation: {
            en: "All systems are delivered with clear technical documentation.",
            es: "Todos los sistemas se entregan con documentación técnica clara.",
        },
        maintainability: {
            en: "Built for long-term maintainability and low operational risk.",
            es: "Construidos para mantenibilidad a largo plazo y bajo riesgo operativo.",
        },
        handoff: {
            en: "Structured knowledge transfer to internal teams.",
            es: "Transferencia de conocimiento estructurada a equipos internos.",
        },
    },
};
