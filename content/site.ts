import { Bot, Workflow, Database, Cpu, Zap, Activity, Target, TrendingUp, ShieldCheck, Phone, Mic, Users } from "lucide-react";

export const siteConfig = {
    profile: {
        name: "Richard Pedraza",
        role: {
            en: "Senior Backend Engineer | Python · Django · AWS · AI & Automation",
            es: "Senior Backend Engineer | Python · Django · AWS · IA & Automatización",
        },
        differentiator: {
            en: "Senior Backend Engineer with 8+ years designing and scaling robust systems with Python, Django, FastAPI and Node.js. I build production AI—from real-time voice agents to complex automation—on AWS architectures that deliver measurable ROI.",
            es: "Senior Backend Engineer con más de 8 años diseñando y escalando sistemas robustos con Python, Django, FastAPI y Node.js. Construyo IA en producción —desde agentes de voz en tiempo real hasta automatización compleja— sobre arquitecturas AWS que generan ROI medible.",
        },
        links: {
            linkedin: "https://www.linkedin.com/in/rchrd-pdrz1993/",
            github: "https://github.com/RchrdMrtnz",
            email: "mailto:rchrd.pdrz.mrtnz@gmail.com",
            medium: "https://medium.com/@rchrd.pdrz.mrtnz",
            telegram: "https://t.me/rchrd_am",
            resume: {
                en: "/RICHARD-PEDRAZA-EN.pdf",
                es: "/RICHARD-PEDRAZA-ES.pdf",
            },
        },
    },

    topSkills: ["Python", "Django", "FastAPI", "TypeScript", "AWS", "Pipecat"],

    skillsByCategory: [
        {
            id: "languages",
            label: { en: "Languages", es: "Lenguajes" },
            skills: ["Python", "Node.js", "TypeScript", "SQL"],
            color: "text-cyan-500 dark:text-cyan-400",
            bgColor: "bg-cyan-500/10",
        },
        {
            id: "backend",
            label: { en: "Backend & APIs", es: "Backend & APIs" },
            skills: ["Django / DRF", "FastAPI", "NestJS", "Express.js"],
            color: "text-indigo-500 dark:text-indigo-400",
            bgColor: "bg-indigo-500/10",
        },
        {
            id: "cloud",
            label: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
            skills: ["AWS", "Docker", "Jenkins", "CI/CD"],
            color: "text-purple-500 dark:text-purple-400",
            bgColor: "bg-purple-500/10",
        },
        {
            id: "ai",
            label: { en: "AI & Voice", es: "IA y Voz" },
            skills: ["Pipecat", "LLMs / GPT-4.1", "Deepgram", "Vector Search"],
            color: "text-emerald-500 dark:text-emerald-400",
            bgColor: "bg-emerald-500/10",
        },
    ],

    services: [
        {
            icon: Bot,
            title: { en: "LLM & Voice Integrations", es: "Integraciones LLM y Voz" },
            desc: {
                en: "Real-time voice agents and LLM pipelines (Pipecat, GPT-4.1, RAG) wired into real business logic, with sub-second latency and prompt-injection protection.",
                es: "Agentes de voz en tiempo real y pipelines LLM (Pipecat, GPT-4.1, RAG) conectados a lógica real de negocio, con latencia sub-segundo y protección contra inyección de prompts.",
            },
        },
        {
            icon: Workflow,
            title: { en: "Workflow Automation", es: "Automatización de Flujos" },
            desc: {
                en: "End-to-end automation with n8n, Python and event-driven integrations that replace manual operations and sync data across CRM, ERP and SaaS.",
                es: "Automatización de extremo a extremo con n8n, Python e integraciones event-driven que reemplazan operaciones manuales y sincronizan datos entre CRM, ERP y SaaS.",
            },
        },
        {
            icon: Database,
            title: { en: "Data Pipelines", es: "Pipelines de Datos" },
            desc: {
                en: "Large-scale ingestion and processing pipelines (Scrapy, Pandas, async queues) built for operational scale and reliability.",
                es: "Pipelines de ingesta y procesamiento a gran escala (Scrapy, Pandas, colas asíncronas) construidos para escala operativa y confiabilidad.",
            },
        },
        {
            icon: Cpu,
            title: { en: "Backend Architecture", es: "Arquitectura Backend" },
            desc: {
                en: "Provider-agnostic, multi-tenant architectures on AWS (Django/DRF, FastAPI, Redis) designed for performance, maintainability and controlled technical debt.",
                es: "Arquitecturas provider-agnostic y multi-inquilino sobre AWS (Django/DRF, FastAPI, Redis) diseñadas para rendimiento, mantenibilidad y deuda técnica controlada.",
            },
        },
    ],

    // Hero terminal cards — the IMPACT of the work (efficiency, quality, capability, seniority)
    heroMetrics: [
        { label: { en: "Faster processing", es: "Procesamiento más rápido" }, value: "-70%", icon: Zap, color: "text-cyan-400", percentage: 70 },
        { label: { en: "Automated accuracy", es: "Precisión automatizada" }, value: "90%", icon: Target, color: "text-emerald-400", percentage: 90 },
        { label: { en: "Real-time AI voice", es: "Voz IA en tiempo real" }, value: "<800ms", icon: Activity, color: "text-indigo-400", percentage: 85 },
        { label: { en: "Years of experience", es: "Años de experiencia" }, value: "8+", icon: TrendingUp, color: "text-purple-400", percentage: 80 },
    ],

    // Outcomes section — the SCALE of production work, each with project context
    metrics: [
        {
            id: "valuation-scale",
            value: "5K+",
            label: { en: "Listings processed per cycle", es: "Listings procesados por ciclo" },
            detail: { en: "Automated valuation, 90% accuracy", es: "Valoración automatizada, 90% de precisión" },
        },
        {
            id: "voice-clients",
            value: "10",
            label: { en: "Multi-tenant voice clients", es: "Clientes de voz multi-inquilino" },
            detail: { en: "5K+ call minutes/month in production", es: "5K+ min de llamadas/mes en producción" },
        },
        {
            id: "records-classified",
            value: "6K+",
            label: { en: "Records classified with AI", es: "Registros clasificados con IA" },
            detail: { en: "Under dynamic evaluation rules", es: "Bajo reglas de evaluación dinámicas" },
        },
        {
            id: "insurers-unified",
            value: "5",
            label: { en: "Insurers unified", es: "Aseguradoras unificadas" },
            detail: { en: "One API, scalable to 10+", es: "Una sola API, escalable a 10+" },
        },
    ],

    experience: [
        {
            company: "Disglobal",
            role: { en: "Senior Backend Engineer", es: "Senior Backend Engineer" },
            period: "Aug 2025 – Present",
            location: { en: "Remote", es: "Remoto" },
            summary: {
                en: "Lead the backend for an insurtech mobile platform that aggregates multiple insurance providers behind a single unified experience.",
                es: "Lidero el backend de una plataforma insurtech (app móvil) que agrega múltiples aseguradoras detrás de una experiencia unificada.",
            },
            highlights: [
                {
                    en: "Unified 5 insurers—each with its own API—behind a single interface so users quote and buy policies in one place; the provider-agnostic design lets the business onboard new insurers without rewriting the platform (scalable to 10+).",
                    es: "Unifiqué 5 aseguradoras —cada una con su propia API— bajo una sola interfaz para que los usuarios coticen y contraten pólizas en un solo lugar; el diseño provider-agnostic permite sumar nuevas aseguradoras sin reescribir la plataforma (escalable a 10+).",
                },
                {
                    en: "Built quoting, underwriting and policy issuance flows with Django REST Framework, PostgreSQL and Redis, optimizing performance through caching.",
                    es: "Construí los flujos de cotización, suscripción y emisión de pólizas con Django REST Framework, PostgreSQL y Redis, optimizando el rendimiento con caché.",
                },
                {
                    en: "Implemented automated document OCR with AWS Textract and a multi-vendor pharmacy marketplace module.",
                    es: "Implementé OCR automatizado de documentos con AWS Textract y un módulo de marketplace de farmacia multi-vendedor.",
                },
            ],
            stack: ["Django REST", "PostgreSQL", "Redis", "AWS Textract"],
        },
        {
            company: "Tesla Media Group",
            role: { en: "Lead AI Voice Engineer", es: "Lead AI Voice Engineer" },
            period: "Aug 2025 – Present",
            location: { en: "Remote · California", es: "Remoto · California" },
            summary: {
                en: "Built an end-to-end production AI voice phone assistant serving 10 multi-tenant clients and 5,000+ call minutes per month.",
                es: "Construí un asistente telefónico de voz con IA en producción, atendiendo 10 clientes multi-inquilino y más de 5.000 minutos de llamadas al mes.",
            },
            highlights: [
                {
                    en: "Orchestrated a real-time voice pipeline with Pipecat (Deepgram STT → GPT-4.1-mini → Cartesia TTS) achieving sub-800ms latency, with barge-in, end-of-turn detection and VAD across PSTN ↔ WebRTC ↔ WebSocket.",
                    es: "Orquesté un pipeline de voz en tiempo real con Pipecat (Deepgram STT → GPT-4.1-mini → Cartesia TTS) con latencia inferior a 800ms, manejo de interrupciones, detección de fin de turno y VAD sobre PSTN ↔ WebRTC ↔ WebSocket.",
                },
                {
                    en: "Built a dynamic conversational flow engine driven by JSON/API—new call flows ship without code changes—with episodic memory, per-client identity and prompt-injection protection.",
                    es: "Construí un motor de flujo conversacional dinámico dirigido por JSON/API —los flujos de llamada nuevos se publican sin tocar código— con memoria episódica, identidad por cliente y protección contra inyección de prompts.",
                },
                {
                    en: "Developed a telephony broker orchestrating a headless Chromium (Playwright) running RingCentral's SIP/WebRTC WebPhone, with a custom PCM/WAV frame serializer and real-time observability.",
                    es: "Desarrollé un broker de telefonía que orquesta Chromium headless (Playwright) corriendo el WebPhone SIP/WebRTC de RingCentral, con un serializador PCM/WAV propio y observabilidad en tiempo real.",
                },
            ],
            stack: ["Pipecat", "FastAPI", "WebRTC", "Docker", "Playwright"],
        },
        {
            company: "Confidential Clients · Freelance",
            role: { en: "Senior Consultant — Backend & AI", es: "Consultor Senior — Backend e IA" },
            period: "Feb 2025 – Dec 2025",
            location: { en: "Remote", es: "Remoto" },
            summary: {
                en: "Backend and AI architecture for high-volume SaaS products under NDA.",
                es: "Arquitectura de backend e IA para productos SaaS de alto volumen bajo NDA.",
            },
            highlights: [
                {
                    en: "Architected the backend of a high-volume automated audio transcription platform (Madrid), orchestrating jobs with async task queues and a privacy-first zero-knowledge authentication mechanism.",
                    es: "Arquitecté el backend de una plataforma de transcripción de audio automatizada de alto volumen (Madrid), orquestando trabajos con colas asíncronas y un mecanismo de autenticación zero-knowledge centrado en la privacidad.",
                },
                {
                    en: "Architected AI agents for a voice-based recruitment platform (Miami) that ranks talent and delivers voice summaries, with a classification engine over 6,000+ metadata-rich records.",
                    es: "Arquitecté agentes de IA para una plataforma de reclutamiento por voz (Miami) que rankea talento y entrega resúmenes por voz, con un motor de clasificación sobre 6.000+ registros ricos en metadatos.",
                },
                {
                    en: "Built asynchronous batch-processing architectures for continuous parallel workloads and established system observability standards.",
                    es: "Construí arquitecturas de procesamiento por lotes asíncrono para cargas paralelas continuas y establecí estándares de observabilidad.",
                },
            ],
            stack: ["FastAPI", "Async Queues", "Vector Search", "Zero-Knowledge"],
        },
        {
            company: "Remax",
            role: { en: "Tech Lead → Full-stack Developer", es: "Tech Lead → Full-stack Developer" },
            period: "Sep 2023 – Jan 2026",
            location: { en: "Remote", es: "Remoto" },
            summary: {
                en: "Led the architecture and team of a business-critical multi-service platform on AWS, after delivering its core automation as a full-stack developer.",
                es: "Lideré la arquitectura y el equipo de una plataforma multi-servicio crítica sobre AWS, tras entregar su automatización central como full-stack developer.",
            },
            highlights: [
                {
                    en: "Delivered an automated property valuation system processing 5,000+ listings per cycle, cutting valuation time by 70% and reaching up to 90% pricing accuracy.",
                    es: "Entregué un sistema automatizado de valoración de propiedades que procesa 5.000+ listings por ciclo, reduciendo el tiempo de valoración en 70% y alcanzando hasta 90% de precisión.",
                },
                {
                    en: "Led a team of 2 developers, established engineering standards (security, observability, deployments) and implemented CI/CD pipelines with Jenkins.",
                    es: "Lideré un equipo de 2 desarrolladores, establecí estándares de ingeniería (seguridad, observabilidad, despliegues) e implementé pipelines CI/CD con Jenkins.",
                },
                {
                    en: "Built data extraction pipelines (Scrapy, BeautifulSoup) and comparative pricing models with Pandas, plus interactive dashboards for internal teams.",
                    es: "Construí pipelines de extracción de datos (Scrapy, BeautifulSoup) y modelos de precios comparativos con Pandas, además de dashboards interactivos para equipos internos.",
                },
            ],
            stack: ["Python", "Django", "Next.js", "Pandas", "AWS", "Jenkins"],
        },
        {
            company: "Crazy Imagine Software",
            role: { en: "Automation Engineer", es: "Ingeniero de Automatización" },
            period: "Mar 2025 – Jun 2025",
            location: { en: "Remote", es: "Remoto" },
            summary: {
                en: "Designed and deployed complex automations for business-critical B2B workflows.",
                es: "Diseñé y desplegué automatizaciones complejas para flujos B2B críticos.",
            },
            highlights: [
                {
                    en: "Built n8n automations integrating chatbots, LLM pipelines and SaaS APIs, enhanced with Python and JavaScript for event-driven flows.",
                    es: "Construí automatizaciones en n8n integrando chatbots, pipelines de LLM y APIs SaaS, potenciadas con Python y JavaScript para flujos event-driven.",
                },
                {
                    en: "Synced data across CRM, ERP and marketing platforms through internal and third-party API integrations, and added AI capabilities (LLM APIs, vector search, prompt engineering).",
                    es: "Sincronicé datos entre CRM, ERP y plataformas de marketing mediante integraciones de APIs internas y de terceros, y agregué capacidades de IA (APIs de LLM, búsqueda vectorial, prompt engineering).",
                },
            ],
            stack: ["n8n", "Python", "LLM APIs", "Vector Search"],
        },
        {
            company: "Universidad ISEP",
            role: { en: "Integration & Automation Specialist", es: "Especialista en Integración y Automatización" },
            period: "Jan 2025 – Mar 2025",
            location: { en: "Remote", es: "Remoto" },
            summary: {
                en: "Designed and optimized automated workflows connecting disparate systems with no-code/low-code tools and API integrations.",
                es: "Diseñé y optimicé flujos automatizados conectando sistemas dispares con herramientas no-code/low-code e integraciones API.",
            },
            highlights: [
                {
                    en: "Analyzed business requirements to build custom automation (n8n + API integrations), reducing manual tasks and driving digital transformation across operational units.",
                    es: "Analicé requisitos de negocio para construir automatización a medida (n8n + integraciones API), reduciendo tareas manuales e impulsando la transformación digital en distintas unidades operativas.",
                },
            ],
            stack: ["n8n", "API Integration", "Low-code"],
        },
    ],

    caseStudies: [
        {
            id: "insurtech-platform",
            title: { en: "Insurtech Aggregation Platform", es: "Plataforma Insurtech de Agregación" },
            category: { en: "Backend Architecture", es: "Arquitectura Backend" },
            description: {
                en: "The backend powering an insurtech mobile app where users compare, buy and manage insurance policies from multiple providers in one place.",
                es: "El backend que impulsa una app insurtech donde los usuarios comparan, contratan y gestionan pólizas de múltiples aseguradoras en un solo lugar.",
            },
            tags: ["Django REST", "PostgreSQL", "Redis", "AWS Textract"],
            impact: [
                { en: "Unified quoting, underwriting and policy issuance across multiple insurers behind one API.", es: "Unifiqué cotización, suscripción y emisión de pólizas de varias aseguradoras tras una sola API." },
                { en: "Provider-agnostic design lets the business onboard new insurers without rewriting the platform.", es: "El diseño provider-agnostic permite sumar nuevas aseguradoras sin reescribir la plataforma." },
                { en: "Automated policy-data capture with OCR, plus a multi-vendor pharmacy marketplace module.", es: "Captura de datos de pólizas automatizada con OCR, más un módulo de marketplace de farmacia multi-vendedor." },
            ],
            icon: ShieldCheck,
        },
        {
            id: "voice-ai-assistant",
            title: { en: "Real-Time AI Voice Assistant", es: "Asistente de Voz con IA en Tiempo Real" },
            category: { en: "AI · Voice", es: "IA · Voz" },
            description: {
                en: "A production multi-tenant AI phone assistant that answers calls, holds natural conversations and routes intent in real time.",
                es: "Un asistente telefónico con IA multi-inquilino en producción que atiende llamadas, mantiene conversaciones naturales y enruta intención en tiempo real.",
            },
            tags: ["Pipecat", "WebRTC", "FastAPI", "Deepgram"],
            metric: { en: "<800ms response", es: "<800ms de respuesta" },
            impact: [
                { en: "Real-time voice pipeline (Deepgram → GPT-4.1 → Cartesia) with barge-in and end-of-turn detection.", es: "Pipeline de voz en tiempo real (Deepgram → GPT-4.1 → Cartesia) con manejo de interrupciones y fin de turno." },
                { en: "Serves 10 multi-tenant clients and 5K+ call minutes per month in production.", es: "Atiende 10 clientes multi-inquilino y 5K+ minutos de llamadas al mes en producción." },
                { en: "New call flows ship without code changes via a JSON/API-driven flow engine.", es: "Los flujos de llamada nuevos se publican sin tocar código vía un motor dirigido por JSON/API." },
            ],
            icon: Phone,
        },
        {
            id: "property-valuation",
            title: { en: "Automated Property Valuation", es: "Valoración Automatizada de Propiedades" },
            category: { en: "Data · Automation", es: "Datos · Automatización" },
            description: {
                en: "An engine that values thousands of real-estate listings automatically, replacing a slow manual process for internal teams.",
                es: "Un motor que valora miles de propiedades automáticamente, reemplazando un proceso manual lento para los equipos internos.",
            },
            tags: ["Python", "Pandas", "Scrapy", "AWS"],
            metric: { en: "70% faster", es: "70% más rápido" },
            impact: [
                { en: "Processes 5,000+ listings per cycle with up to 90% pricing accuracy.", es: "Procesa 5.000+ listings por ciclo con hasta 90% de precisión." },
                { en: "Large-scale data extraction and comparative pricing models (Scrapy + Pandas).", es: "Extracción de datos a gran escala y modelos de precios comparativos (Scrapy + Pandas)." },
                { en: "Interactive dashboards giving internal teams real-time visibility.", es: "Dashboards interactivos que dan visibilidad en tiempo real a los equipos internos." },
            ],
            icon: TrendingUp,
        },
        {
            id: "audio-transcription",
            title: { en: "High-Volume Transcription SaaS", es: "SaaS de Transcripción de Alto Volumen" },
            client: { en: "Confidential client · Madrid", es: "Cliente confidencial · Madrid" },
            category: { en: "Backend · SaaS", es: "Backend · SaaS" },
            description: {
                en: "The backend of a high-volume automated audio transcription product, built for scale and privacy by design.",
                es: "El backend de un producto de transcripción de audio automatizada de alto volumen, construido para escalar y con privacidad por diseño.",
            },
            tags: ["Async Queues", "Zero-Knowledge", "SaaS"],
            impact: [
                { en: "Asynchronous task queues optimized for large, parallel audio workloads.", es: "Colas de tareas asíncronas optimizadas para cargas de audio grandes y paralelas." },
                { en: "Privacy-first authentication with irreversible zero-knowledge hashing for sensitive data.", es: "Autenticación privacy-first con hashing zero-knowledge irreversible para datos sensibles." },
            ],
            icon: Mic,
        },
        {
            id: "recruitment-intelligence",
            title: { en: "Voice Recruitment Intelligence", es: "Inteligencia de Reclutamiento por Voz" },
            client: { en: "Confidential client · Miami", es: "Cliente confidencial · Miami" },
            category: { en: "AI · Decision Systems", es: "IA · Sistemas de Decisión" },
            description: {
                en: "An AI system that screens candidates and hands recruiters ranked shortlists with voice summaries instead of raw data.",
                es: "Un sistema de IA que filtra candidatos y entrega a los reclutadores listas rankeadas con resúmenes por voz en vez de datos crudos.",
            },
            tags: ["AI Agents", "Vector Search", "Voice"],
            metric: { en: "6K+ records", es: "6K+ registros" },
            impact: [
                { en: "AI agents rank talent and deliver voice summaries to recruiters.", es: "Agentes de IA rankean talento y entregan resúmenes por voz a los reclutadores." },
                { en: "Classification engine over 6,000+ metadata-rich records under dynamic rules.", es: "Motor de clasificación sobre 6.000+ registros ricos en metadatos bajo reglas dinámicas." },
                { en: "Asynchronous batch processing for continuous parallel workloads.", es: "Procesamiento por lotes asíncrono para cargas paralelas continuas." },
            ],
            icon: Users,
        },
        {
            id: "b2b-automation",
            title: { en: "B2B Workflow Automation", es: "Automatización de Flujos B2B" },
            category: { en: "Automation · AI", es: "Automatización · IA" },
            description: {
                en: "Event-driven automations that replace manual B2B operations and keep business systems in sync.",
                es: "Automatizaciones event-driven que reemplazan operaciones B2B manuales y mantienen los sistemas del negocio sincronizados.",
            },
            tags: ["n8n", "LLM", "Vector Search", "CRM/ERP"],
            impact: [
                { en: "Complex n8n automations integrating chatbots, LLM pipelines and SaaS APIs.", es: "Automatizaciones complejas en n8n integrando chatbots, pipelines de LLM y APIs SaaS." },
                { en: "Keeps CRM, ERP and marketing platforms in sync via internal and third-party APIs.", es: "Mantiene CRM, ERP y plataformas de marketing en sync vía APIs internas y de terceros." },
                { en: "AI-powered content generation and analysis with vector search.", es: "Generación y análisis de contenido con IA y búsqueda vectorial." },
            ],
            icon: Workflow,
        },
    ],

    consulting: {
        title: { en: "AI Consulting & System Design", es: "Consultoría e Integración de IA" },
        pitch: {
            en: "I help companies integrate AI in a practical, reliable, business-aligned way—focused on operational impact, not experimentation.",
            es: "Ayudo a empresas a integrar IA de forma práctica, confiable y alineada al negocio, enfocada en impacto operativo real y no en experimentación.",
        },
        services: [
            { en: "AI opportunity assessment and technical feasibility", es: "Evaluación de oportunidades de IA y viabilidad técnica" },
            { en: "Design of AI-enabled decision and automation systems", es: "Diseño de sistemas de decisión y automatización con IA" },
            { en: "LLM, voice, workflow and system integration", es: "Integración de LLMs, voz, flujos y sistemas existentes" },
            { en: "Scalability, cost control and maintainability guidance", es: "Acompañamiento en escalabilidad, control de costos y mantenibilidad" },
        ],
        outcome: {
            en: "A clear technical roadmap and AI systems ready to operate and scale.",
            es: "Una hoja de ruta técnica clara y sistemas de IA listos para operar y escalar.",
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
            en: "A focused technical discovery to map automation opportunities and high-impact quick wins.",
            es: "Un diagnóstico técnico enfocado para mapear oportunidades de automatización y quick wins de alto impacto.",
        },
        deliverable: {
            en: "A prioritized automation roadmap with measurable impact.",
            es: "Una hoja de ruta de automatización priorizada con impacto medible.",
        },
    },

    trust: {
        documentation: {
            en: "Systems delivered with clear technical documentation.",
            es: "Sistemas entregados con documentación técnica clara.",
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
