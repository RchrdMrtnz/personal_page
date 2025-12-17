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
            telegram: "https://t.me/placeholder",
            resume: {
                en: "/Richard-Pedraza-Resume.pdf",
                es: "/Richard-Pedraza-Resume.pdf"
            },
        },
    },

    topSkills: ["TypeScript", "Next.js", "Python", "AWS", "RAG", "n8n"],

    services: [
        {
            icon: Bot,
            title: { en: "LLM Integrations", es: "Integraciones LLM" },
            desc: {
                en: "Custom AI agents, RAG pipelines, and structured outputs for business logic.",
                es: "Agentes de IA personalizados, pipelines RAG y salidas estructuradas para lógica de negocio."
            }
        },
        {
            icon: Workflow,
            title: { en: "Workflow Automation", es: "Automatización de Flujos" },
            desc: {
                en: "End-to-end orchestration using n8n, Python scripts, and API connectors.",
                es: "Orquestación de extremo a extremo usando n8n, scripts Python y conectores API."
            }
        },
        {
            icon: Database,
            title: { en: "Data Pipelines", es: "Pipelines de Datos" },
            desc: {
                en: "High-throughput ingestion, cleaning, and processing systems.",
                es: "Sistemas de ingesta, limpieza y procesamiento de alto rendimiento."
            }
        },
        {
            icon: Cpu,
            title: { en: "Backend Architecture", es: "Arquitectura Backend" },
            desc: {
                en: "Scalable microservices and serverless functions (AWS Lambda, FastAPI).",
                es: "Microservicios escalables y funciones serverless (AWS Lambda, FastAPI)."
            }
        }
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
            label: { en: "Property valuation time", es: "Tiempo de valoración" },
            detail: { en: "Reduced from 3–4 days", es: "Reducido de 3–4 días" },
        },
    ],

    experience: [
        {
            company: "DISGLOBAL",
            role: { en: "Backend Developer", es: "Backend Developer" },
            period: "Aug 2025 – Present",
            description: {
                en: "Build/optimize APIs; security; deployment; DB performance.",
                es: "Construcción/optimización de APIs; seguridad; despliegue; rendimiento de BD.",
            },
        },
        {
            company: "Real Estate Tech",
            role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
            period: "Sep 2023 – Present",
            description: {
                en: "Valuation system; Next.js dashboard; scraping + AI analysis; automation.",
                es: "Sistema de valoración; dashboard Next.js; scraping + análisis IA; automatización.",
            },
        },
        {
            company: "Crazy Imagine Software",
            role: { en: "Automation Engineer", es: "Ingeniero de Automatización" },
            period: "May 2025 – Jun 2025",
            description: {
                en: "n8n + AI pipelines; system integrations.",
                es: "Pipelines n8n + IA; integraciones de sistemas.",
            },
        },
        {
            company: "Universidad ISEP",
            role: { en: "Integration & Automation Specialist", es: "Especialista en Integración y Automatización" },
            period: "Feb 2025 – May 2025",
            description: {
                en: "Workflow optimization.",
                es: "Optimización de flujos de trabajo.",
            },
        },
    ],

    caseStudies: [
        {
            id: "valuation-engine",
            title: { en: "Property Valuation Engine", es: "Motor de Valoración Inmobiliaria" },
            description: {
                en: "Automated property valuation system reducing turnaround from days to minutes.",
                es: "Sistema automatizado de valoración reduciendo el tiempo de días a minutos.",
            },
            tags: ["Python", "Custom Models", "Automation"],
            stats: { en: "3-4 days → <2 min", es: "3-4 días → <2 min" },
            image: "/projects/valuation.jpg"
        },
        {
            id: "data-pipeline",
            title: { en: "High-Scale Data Ingestion", es: "Ingesta de Datos a Gran Escala" },
            description: {
                en: "Scaled ingestion to 25,000+ records/week with 99.3% accuracy.",
                es: "Escalado a 25,000+ registros/semana con 99.3% de precisión.",
            },
            tags: ["Async Pipelines", "Data Engineering", "Accuracy"],
            stats: { en: "99.3% accuracy", es: "99.3% precisión" },
            image: "/projects/pipeline.jpg"
        },
        {
            id: "ops-automation",
            title: { en: "Operational Automation", es: "Automatización Operativa" },
            description: {
                en: "Digitized and automated 100% of operational processes enabling real-time visibility.",
                es: "Digitalización y automatización del 100% de procesos operativos.",
            },
            tags: ["n8n", "Workflows", "Real-time"],
            stats: { en: "100% digitized", es: "100% digitalizado" },
            image: "/projects/automation.jpg"
        },
    ],

    about: {
        title: { en: "About Me", es: "Sobre Mí" },
        bio: {
            en: "I am a Full-Stack Engineer specializing in AI and Automation. My focus is on building systems that not only solve immediate technical challenges but also create long-term business value. I leverage the latest in Large Language Models and cloud architecture to deliver scalable solutions.",
            es: "Soy un Ingeniero Full-Stack especializado en IA y Automatización. Mi enfoque es construir sistemas que no solo resuelven desafíos técnicos inmediatos, sino que también crean valor comercial a largo plazo. Aprovecho lo último en Grandes Modelos de Lenguaje y arquitectura en la nube para entregar soluciones escalables."
        },
        mission: {
            en: "To democratize access to advanced AI automation for forward-thinking businesses.",
            es: "Democratizar el acceso a la automatización avanzada con IA para empresas con visión de futuro."
        }
    },

    methodology: {
        title: { en: "My Approach", es: "Mi Enfoque" },
        steps: [
            {
                title: { en: "Discovery", es: "Descubrimiento" },
                desc: { en: "Understanding the core business problem, not just the symptoms.", es: "Entender el problema central del negocio, no solo los síntomas." }
            },
            {
                title: { en: "Architecture", es: "Arquitectura" },
                desc: { en: "Designing a robust, scalable system blueprint.", es: "Diseñar un plano de sistema robusto y escalable." }
            },
            {
                title: { en: "Implementation", es: "Implementación" },
                desc: { en: "Agile development with continuous feedback loops.", es: "Desarrollo ágil con ciclos de retroalimentación continua." }
            },
            {
                title: { en: "Optimization", es: "Optimización" },
                desc: { en: "Data-driven refinement for maximum efficiency.", es: "Refinamiento basado en datos para máxima eficiencia." }
            }
        ]
    },

    techStack: {
        languages: {
            title: { en: "Languages", es: "Lenguajes" },
            items: ["TypeScript", "Python", "SQL", "JavaScript"]
        },
        frameworks: {
            title: { en: "Frameworks & Libraries", es: "Frameworks y Librerías" },
            items: ["Next.js", "React", "FastAPI", "Tailwind CSS", "Node.js"]
        },
        tools: {
            title: { en: "Tools & Platforms", es: "Herramientas y Plataformas" },
            items: ["n8n", "Docker", "AWS", "Git", "Vercel", "Supabase"]
        },
        ai: {
            title: { en: "AI & Data", es: "IA y Datos" },
            items: ["OpenAI API", "LangChain", "Hugging Face", "Vector Databases", "RAG"]
        }
    },

    cta: {
        ready: { en: "Ready to scale your operations?", es: "¿Listo para escalar sus operaciones?" },
        discussion: { en: "Let's discuss how AI can transform your business.", es: "Hablemos de cómo la IA puede transformar su negocio." },
        action: { en: "Book a Discovery Call", es: "Agendar Llamada de Descubrimiento" }
    },

    problems: {
        title: { en: "Common Business Problems", es: "Problemas Comunes de Negocio" },
        items: [
            { en: "Manual processes that no longer scale with business growth.", es: "Procesos manuales que ya no escalan con el crecimiento del negocio." },
            { en: "Disconnected systems that prevent real-time operational visibility.", es: "Sistemas desconectados que impiden la visibilidad operativa en tiempo real." },
            { en: "Data scattered across tools without decision intelligence.", es: "Datos dispersos sin inteligencia para la toma de decisiones." },
            { en: "Operational dependency on key individuals.", es: "Dependencia operativa de personas clave." },
            { en: "Slow execution caused by repetitive human tasks.", es: "Ejecución lenta por tareas humanas repetitivas." }
        ]
    },

    entryOffer: {
        title: { en: "How We Start", es: "Cómo Empezamos" },
        description: {
            en: "A focused technical discovery to identify automation opportunities, bottlenecks, and high-impact quick wins.",
            es: "Un diagnóstico técnico enfocado para identificar oportunidades de automatización, cuellos de botella y quick wins de alto impacto."
        },
        deliverable: {
            en: "You receive a prioritized automation roadmap with measurable impact.",
            es: "Recibes una hoja de ruta priorizada de automatización con impacto medible."
        }
    },

    trust: {
        documentation: {
            en: "All systems are delivered with technical documentation and clear operational guidelines.",
            es: "Todos los sistemas se entregan con documentación técnica y lineamientos claros de operación."
        },
        maintainability: {
            en: "Built with long-term maintainability and low operational risk in mind.",
            es: "Construidos con mantenibilidad a largo plazo y bajo riesgo operativo en mente."
        },
        handoff: {
            en: "Seamless knowledge transfer to internal technical teams.",
            es: "Transferencia de conocimiento fluida hacia equipos técnicos internos."
        }
    }
};
