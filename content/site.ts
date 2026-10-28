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
        // Path under /public (e.g. "/richard-pedraza.jpg"). Shown in the Hero and used
        // as the Person image in structured data once set.
        photo: undefined as string | undefined,
        // Home "About" blurb — intentionally different from the Hero copy and the /about bio.
        aboutBlurb: {
            en: "I'm the engineer teams bring in when a system has to work in production, not just in a demo. Today I lead the backend of an insurtech platform and built a real-time AI phone assistant end to end; before that I led a team running a business-critical platform on AWS. I translate business needs into architecture that is simple to operate and easy to hand off.",
            es: "Soy el ingeniero al que recurren los equipos cuando un sistema tiene que funcionar en producción, no solo en una demo. Hoy lidero el backend de una plataforma insurtech y construí de punta a punta un asistente telefónico con IA en tiempo real; antes lideré un equipo a cargo de una plataforma crítica sobre AWS. Traduzco necesidades de negocio en arquitecturas simples de operar y fáciles de traspasar.",
        },
        // /about page bio (paragraphs).
        bio: {
            en: [
                "I'm a Senior Backend Engineer with 8+ years designing and scaling backend systems with Python, Django, FastAPI and Node.js. I specialize in AWS architectures, production databases (PostgreSQL, Redis) and CI/CD pipelines, with a focus on availability and performance.",
                "Lately my work has centered on production AI. At Tesla Media Group I built an AI phone assistant end to end that serves 10 clients and 5,000+ call minutes a month with responses under 800 ms. At Disglobal I lead the backend of an insurtech app that unifies 5 insurers behind a single API.",
                "Before that, at Remax, I went from full-stack developer to tech lead: I delivered an automated valuation system that cut valuation time by 70%, then led a team of 2 developers, set engineering standards and built CI/CD pipelines with Jenkins.",
                "I work remotely with teams in the US and Spain, and I care as much about documentation and handoff as about the code itself.",
            ],
            es: [
                "Soy Senior Backend Engineer con más de 8 años diseñando y escalando sistemas backend con Python, Django, FastAPI y Node.js. Me especializo en arquitecturas sobre AWS, bases de datos en producción (PostgreSQL, Redis) y pipelines CI/CD, con foco en disponibilidad y rendimiento.",
                "Últimamente mi trabajo se centra en IA en producción. En Tesla Media Group construí de punta a punta un asistente telefónico con IA que atiende a 10 clientes y más de 5.000 minutos de llamadas al mes con respuestas por debajo de 800 ms. En Disglobal lidero el backend de una app insurtech que unifica 5 aseguradoras detrás de una sola API.",
                "Antes, en Remax, pasé de full-stack developer a tech lead: entregué un sistema de valoración automatizada que redujo el tiempo de valoración en un 70%, y luego lideré un equipo de 2 desarrolladores, definí estándares de ingeniería y construí pipelines CI/CD con Jenkins.",
                "Trabajo en remoto con equipos de Estados Unidos y España, y me importa tanto la documentación y el traspaso como el código en sí.",
            ],
        },
        education: {
            degree: { en: "Computer Engineering", es: "Ingeniería en Informática" },
            school: "Instituto Universitario de Tecnología (I.U.T.A.I)",
            period: "2010 – 2016",
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

    // Each service has its own page at /services/[slug]. `seoTitle` is the page H1
    // and targets what clients actually search for.
    services: [
        {
            slug: "ai-voice-agents",
            icon: Bot,
            title: { en: "LLM & Voice Integrations", es: "Integraciones LLM y Voz" },
            seoTitle: { en: "AI Voice Agents & LLM Integration", es: "Agentes de voz con IA e integración de LLMs" },
            desc: {
                en: "Real-time voice agents and LLM pipelines (Pipecat, GPT-4.1, RAG) wired into real business logic, with sub-second latency and prompt-injection protection.",
                es: "Agentes de voz en tiempo real y pipelines LLM (Pipecat, GPT-4.1, RAG) conectados a lógica real de negocio, con latencia sub-segundo y protección contra inyección de prompts.",
            },
            intro: {
                en: "I design and build AI voice agents and LLM integrations that run in production: phone assistants that answer in under a second, handle interruptions and connect to your real business logic—not demos that break on the first unexpected question.",
                es: "Diseño y construyo agentes de voz con IA e integraciones de LLMs que funcionan en producción: asistentes telefónicos que responden en menos de un segundo, manejan interrupciones y se conectan con la lógica real de tu negocio, no demos que se rompen con la primera pregunta inesperada.",
            },
            includes: [
                { en: "Real-time voice pipelines (STT → LLM → TTS) with Pipecat, Deepgram and Cartesia, tuned for latency.", es: "Pipelines de voz en tiempo real (STT → LLM → TTS) con Pipecat, Deepgram y Cartesia, optimizados para latencia." },
                { en: "Telephony integration: PSTN, SIP/WebRTC and WebSockets.", es: "Integración con telefonía: PSTN, SIP/WebRTC y WebSockets." },
                { en: "Conversation flows configurable via JSON/API, so new flows ship without code changes.", es: "Flujos de conversación configurables por JSON/API, para publicar flujos nuevos sin tocar código." },
                { en: "LLM integration with RAG, memory and prompt-injection protection.", es: "Integración de LLMs con RAG, memoria y protección contra inyección de prompts." },
            ],
            useCases: [
                { en: "Answering and qualifying inbound calls 24/7.", es: "Atender y calificar llamadas entrantes 24/7." },
                { en: "Scheduling, intake or support calls that follow a defined flow.", es: "Llamadas de agendamiento, recepción o soporte que siguen un flujo definido." },
                { en: "Serving several clients or brands from one multi-tenant platform.", es: "Atender a varios clientes o marcas desde una sola plataforma multi-inquilino." },
                { en: "Adding an LLM to an existing product without compromising reliability.", es: "Sumar un LLM a un producto existente sin comprometer su confiabilidad." },
            ],
            stack: ["Pipecat", "Deepgram", "GPT-4.1", "Cartesia", "WebRTC", "FastAPI"],
            caseStudies: ["voice-ai-assistant", "recruitment-intelligence"],
            faqs: [
                {
                    q: { en: "What response latency can a voice agent achieve?", es: "¿Qué latencia de respuesta puede lograr un agente de voz?" },
                    a: {
                        en: "In the assistant I built for production, the full STT → LLM → TTS round trip stays under 800 ms. The final number depends on the providers, the model and the telephony path, so I measure it from day one.",
                        es: "En el asistente que construí para producción, el ciclo completo STT → LLM → TTS se mantiene por debajo de 800 ms. El número final depende de los proveedores, el modelo y la ruta telefónica, por eso lo mido desde el primer día.",
                    },
                },
                {
                    q: { en: "Can it connect to my phone system and CRM?", es: "¿Se puede conectar con mi telefonía y mi CRM?" },
                    a: {
                        en: "Yes. I've integrated PSTN telephony, SIP/WebRTC softphones and WebSockets, and the agent can read from or write to your APIs during the conversation.",
                        es: "Sí. He integrado telefonía PSTN, softphones SIP/WebRTC y WebSockets, y el agente puede consultar o escribir en tus APIs durante la conversación.",
                    },
                },
                {
                    q: { en: "How do you keep the LLM from going off-script?", es: "¿Cómo evitas que el LLM se salga del guion?" },
                    a: {
                        en: "Conversations follow explicit flows defined in JSON, each step has its own instructions and tools, and inputs are filtered against prompt injection. The LLM handles language; the flow handles the business rules.",
                        es: "Las conversaciones siguen flujos explícitos definidos en JSON, cada paso tiene sus propias instrucciones y herramientas, y las entradas se filtran contra inyección de prompts. El LLM se encarga del lenguaje; el flujo, de las reglas del negocio.",
                    },
                },
            ],
        },
        {
            slug: "workflow-automation",
            icon: Workflow,
            title: { en: "Workflow Automation", es: "Automatización de Flujos" },
            seoTitle: { en: "Workflow Automation with n8n & Python", es: "Automatización de procesos con n8n y Python" },
            desc: {
                en: "End-to-end automation with n8n, Python and event-driven integrations that replace manual operations and sync data across CRM, ERP and SaaS.",
                es: "Automatización de extremo a extremo con n8n, Python e integraciones event-driven que reemplazan operaciones manuales y sincronizan datos entre CRM, ERP y SaaS.",
            },
            intro: {
                en: "I automate the repetitive operations that slow your team down: data copied between tools, manual reports, leads handled by hand. With n8n for orchestration and Python where custom logic is needed, I build workflows that are easy to maintain and don't depend on one person.",
                es: "Automatizo las operaciones repetitivas que frenan a tu equipo: datos copiados entre herramientas, reportes manuales, leads gestionados a mano. Con n8n para orquestar y Python donde hace falta lógica a medida, construyo flujos fáciles de mantener que no dependen de una sola persona.",
            },
            includes: [
                { en: "Mapping your current processes to find the highest-impact automations.", es: "Mapeo de tus procesos actuales para encontrar las automatizaciones de mayor impacto." },
                { en: "n8n workflows extended with Python and JavaScript for event-driven logic.", es: "Flujos en n8n potenciados con Python y JavaScript para lógica event-driven." },
                { en: "Integrations with CRMs, ERPs, marketing platforms and any SaaS with an API.", es: "Integraciones con CRM, ERP, plataformas de marketing y cualquier SaaS con API." },
                { en: "AI steps where they add value: classification, extraction and content generation with LLMs.", es: "Pasos con IA donde aportan valor: clasificación, extracción y generación de contenido con LLMs." },
            ],
            useCases: [
                { en: "Keeping CRM, ERP and marketing tools in sync without copy-paste.", es: "Mantener CRM, ERP y herramientas de marketing sincronizados sin copiar y pegar." },
                { en: "Routing and qualifying leads automatically.", es: "Enrutar y calificar leads automáticamente." },
                { en: "Generating recurring operational reports.", es: "Generar reportes operativos recurrentes." },
                { en: "Chatbots and LLM pipelines wired into internal processes.", es: "Chatbots y pipelines de LLM conectados a procesos internos." },
            ],
            stack: ["n8n", "Python", "JavaScript", "LLM APIs", "REST APIs"],
            caseStudies: ["b2b-automation", "property-valuation"],
            faqs: [
                {
                    q: { en: "n8n or custom code?", es: "¿n8n o código a medida?" },
                    a: {
                        en: "Both, depending on the step. n8n is great for orchestration and visibility; Python handles heavy or custom logic. The goal is that your team can understand and adjust the workflows after handoff.",
                        es: "Ambos, según el paso. n8n es ideal para orquestar y dar visibilidad; Python resuelve la lógica pesada o específica. El objetivo es que tu equipo pueda entender y ajustar los flujos después de la entrega.",
                    },
                },
                {
                    q: { en: "Which tools can you integrate?", es: "¿Qué herramientas puedes integrar?" },
                    a: {
                        en: "Anything with an API or webhooks: CRMs, ERPs, marketing platforms, spreadsheets, databases and internal services.",
                        es: "Cualquier cosa con API o webhooks: CRM, ERP, plataformas de marketing, hojas de cálculo, bases de datos y servicios internos.",
                    },
                },
                {
                    q: { en: "Where do I start if I don't know what to automate?", es: "¿Por dónde empiezo si no sé qué automatizar?" },
                    a: {
                        en: "With a short technical discovery: we map your processes, estimate the impact of each automation and prioritize the quick wins.",
                        es: "Con un diagnóstico técnico breve: mapeamos tus procesos, estimamos el impacto de cada automatización y priorizamos los quick wins.",
                    },
                },
            ],
        },
        {
            slug: "data-pipelines",
            icon: Database,
            title: { en: "Data Pipelines", es: "Pipelines de Datos" },
            seoTitle: { en: "Data Pipelines & Web Scraping with Python", es: "Pipelines de datos y web scraping con Python" },
            desc: {
                en: "Large-scale ingestion and processing pipelines (Scrapy, Pandas, async queues) built for operational scale and reliability.",
                es: "Pipelines de ingesta y procesamiento a gran escala (Scrapy, Pandas, colas asíncronas) construidos para escala operativa y confiabilidad.",
            },
            intro: {
                en: "I build data pipelines that collect, clean and process information at scale, turning scattered sources into data your team and your models can actually use. From web scraping to processing with Pandas and async queues, designed to run reliably every cycle.",
                es: "Construyo pipelines de datos que recolectan, limpian y procesan información a escala, convirtiendo fuentes dispersas en datos que tu equipo y tus modelos pueden usar. Desde web scraping hasta procesamiento con Pandas y colas asíncronas, diseñados para correr de forma confiable en cada ciclo.",
            },
            includes: [
                { en: "Large-scale data extraction with Scrapy and BeautifulSoup.", es: "Extracción de datos a gran escala con Scrapy y BeautifulSoup." },
                { en: "Processing, cleaning and modeling pipelines with Pandas.", es: "Pipelines de procesamiento, limpieza y modelado con Pandas." },
                { en: "Async task queues and batch processing for parallel workloads.", es: "Colas de tareas asíncronas y procesamiento por lotes para cargas paralelas." },
                { en: "Dashboards and APIs that put the results in your team's hands.", es: "Dashboards y APIs que ponen los resultados en manos de tu equipo." },
            ],
            useCases: [
                { en: "Monitoring prices or listings from multiple sources.", es: "Monitorear precios o publicaciones de múltiples fuentes." },
                { en: "Automated valuation or scoring models fed by fresh data.", es: "Modelos de valoración o scoring alimentados con datos frescos." },
                { en: "Classifying thousands of records with AI under business rules.", es: "Clasificar miles de registros con IA bajo reglas de negocio." },
                { en: "Replacing manual spreadsheet work with repeatable processes.", es: "Reemplazar trabajo manual en hojas de cálculo por procesos repetibles." },
            ],
            stack: ["Python", "Scrapy", "Pandas", "PostgreSQL", "AWS"],
            caseStudies: ["property-valuation", "recruitment-intelligence"],
            faqs: [
                {
                    q: { en: "How much data can a pipeline handle?", es: "¿Cuántos datos puede manejar un pipeline?" },
                    a: {
                        en: "In production I've processed 5,000+ listings per cycle and classified 6,000+ records with AI. The design—queues, batching and storage—is sized to your volume.",
                        es: "En producción he procesado más de 5.000 listings por ciclo y clasificado más de 6.000 registros con IA. El diseño —colas, lotes y almacenamiento— se dimensiona según tu volumen.",
                    },
                },
                {
                    q: { en: "How do you keep scrapers from breaking?", es: "¿Cómo evitas que los scrapers se rompan?" },
                    a: {
                        en: "Each source is isolated, failures are logged and retried, and data is validated before it reaches your models, so one broken source doesn't stop the whole pipeline.",
                        es: "Cada fuente está aislada, los fallos se registran y se reintentan, y los datos se validan antes de llegar a tus modelos, así una fuente rota no detiene todo el pipeline.",
                    },
                },
                {
                    q: { en: "Can the data feed an AI model or a dashboard?", es: "¿Los datos pueden alimentar un modelo de IA o un dashboard?" },
                    a: {
                        en: "Yes. The output can feed pricing or classification models, LLMs, internal dashboards or an API for your product.",
                        es: "Sí. La salida puede alimentar modelos de precios o clasificación, LLMs, dashboards internos o una API para tu producto.",
                    },
                },
            ],
        },
        {
            slug: "backend-development",
            icon: Cpu,
            title: { en: "Backend Architecture", es: "Arquitectura Backend" },
            seoTitle: { en: "Backend Development with Python, Django & AWS", es: "Desarrollo backend con Python, Django y AWS" },
            desc: {
                en: "Provider-agnostic, multi-tenant architectures on AWS (Django/DRF, FastAPI, Redis) designed for performance, maintainability and controlled technical debt.",
                es: "Arquitecturas provider-agnostic y multi-inquilino sobre AWS (Django/DRF, FastAPI, Redis) diseñadas para rendimiento, mantenibilidad y deuda técnica controlada.",
            },
            intro: {
                en: "I design and build backends that hold up in production: APIs, integrations and AWS architectures with Python, Django and FastAPI, built for performance, maintainability and controlled technical debt.",
                es: "Diseño y construyo backends que aguantan en producción: APIs, integraciones y arquitecturas sobre AWS con Python, Django y FastAPI, pensadas para rendimiento, mantenibilidad y deuda técnica controlada.",
            },
            includes: [
                { en: "REST APIs with Django REST Framework, FastAPI or NestJS.", es: "APIs REST con Django REST Framework, FastAPI o NestJS." },
                { en: "Provider-agnostic, multi-tenant architectures that make new integrations cheap to add.", es: "Arquitecturas provider-agnostic y multi-inquilino que abaratan sumar nuevas integraciones." },
                { en: "PostgreSQL and Redis tuned for performance: modeling, caching and migrations.", es: "PostgreSQL y Redis optimizados: modelado, caché y migraciones." },
                { en: "AWS infrastructure, Docker and CI/CD pipelines (Jenkins) with security and observability standards.", es: "Infraestructura en AWS, Docker y pipelines CI/CD (Jenkins) con estándares de seguridad y observabilidad." },
            ],
            useCases: [
                { en: "Unifying several third-party APIs behind one interface.", es: "Unificar varias APIs de terceros detrás de una sola interfaz." },
                { en: "Scaling a backend that has become slow or fragile.", es: "Escalar un backend que se volvió lento o frágil." },
                { en: "Building the backend for a new web or mobile product.", es: "Construir el backend de un nuevo producto web o móvil." },
                { en: "Setting standards, CI/CD and technical leadership for a small team.", es: "Definir estándares, CI/CD y liderazgo técnico para un equipo pequeño." },
            ],
            stack: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker"],
            caseStudies: ["insurtech-platform", "audio-transcription", "voice-ai-assistant"],
            faqs: [
                {
                    q: { en: "Can you work with an existing codebase?", es: "¿Puedes trabajar sobre un código existente?" },
                    a: {
                        en: "Yes. I start by understanding the current architecture and the business, then improve it incrementally without stopping operations.",
                        es: "Sí. Empiezo por entender la arquitectura actual y el negocio, y luego la mejoro de forma incremental sin detener la operación.",
                    },
                },
                {
                    q: { en: "Do you work under NDA?", es: "¿Trabajas bajo NDA?" },
                    a: {
                        en: "Yes. Several of my projects are confidential; I'm used to working under NDA and only showing anonymized work.",
                        es: "Sí. Varios de mis proyectos son confidenciales; estoy acostumbrado a trabajar bajo NDA y a mostrar solo trabajo anonimizado.",
                    },
                },
                {
                    q: { en: "Can you lead the team, or only write code?", es: "¿Puedes liderar el equipo o solo programar?" },
                    a: {
                        en: "Both. I've worked as an individual contributor and as tech lead: defining the roadmap, setting engineering standards and overseeing delivery.",
                        es: "Ambas cosas. He trabajado como desarrollador individual y como tech lead: definiendo el roadmap, estableciendo estándares de ingeniería y supervisando las entregas.",
                    },
                },
            ],
        },
    ],

    // Shared delivery process shown on the service pages.
    process: [
        {
            title: { en: "Discovery", es: "Diagnóstico" },
            desc: { en: "A focused technical discovery to understand your goals and map high-impact quick wins.", es: "Un diagnóstico técnico enfocado para entender tus objetivos y mapear quick wins de alto impacto." },
        },
        {
            title: { en: "Architecture & plan", es: "Arquitectura y plan" },
            desc: { en: "A prioritized roadmap with the architecture, scope and measurable impact of each piece.", es: "Una hoja de ruta priorizada con la arquitectura, el alcance y el impacto medible de cada pieza." },
        },
        {
            title: { en: "Build & integrate", es: "Construcción e integración" },
            desc: { en: "Iterative delivery, integrated with your existing systems and with visibility on progress.", es: "Entregas iterativas, integradas con tus sistemas actuales y con visibilidad del avance." },
        },
        {
            title: { en: "Handoff", es: "Entrega" },
            desc: { en: "Clear technical documentation and structured knowledge transfer to your team.", es: "Documentación técnica clara y transferencia de conocimiento estructurada a tu equipo." },
        },
    ],

    // Hero terminal cards — the IMPACT of the work (efficiency, quality, capability, seniority)
    heroMetrics: [
        { label: { en: "Processing time", es: "Tiempo de procesamiento" }, value: "-70%", icon: Zap, color: "text-cyan-400", percentage: 70 },
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
            start: "2025-08",
            end: null,
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
            start: "2025-08",
            end: null,
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
            company: "Remax",
            role: { en: "Full-stack Developer → Tech Lead", es: "Full-stack Developer → Tech Lead" },
            start: "2023-09",
            end: "2026-01",
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
            company: { en: "Confidential Clients · Freelance", es: "Clientes confidenciales · Freelance" },
            role: { en: "Senior Consultant — Backend & AI", es: "Consultor Senior — Backend e IA" },
            start: "2025-02",
            end: "2025-12",
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
            company: "Crazy Imagine Software",
            role: { en: "Automation Engineer", es: "Ingeniero de Automatización" },
            start: "2025-03",
            end: "2025-06",
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
            start: "2025-01",
            end: "2025-03",
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
            metric: { en: "5 insurers live", es: "5 aseguradoras en producción" },
            challenge: {
                en: "Each insurer exposes its own API, data model and policy flow. Users needed to compare and buy policies from several providers in one app, and the business needed to add new insurers without rewriting the platform every time.",
                es: "Cada aseguradora expone su propia API, modelo de datos y flujo de pólizas. Los usuarios necesitaban comparar y contratar pólizas de varios proveedores en una sola app, y el negocio necesitaba sumar aseguradoras sin reescribir la plataforma cada vez.",
            },
            solution: [
                { en: "Provider-agnostic architecture: each insurer's API sits behind a common interface, so quoting, underwriting and issuance work the same way for all of them.", es: "Arquitectura provider-agnostic: la API de cada aseguradora queda detrás de una interfaz común, así cotización, suscripción y emisión funcionan igual para todas." },
                { en: "Quoting, underwriting and policy issuance flows built with Django REST Framework and PostgreSQL, with Redis caching for performance.", es: "Flujos de cotización, suscripción y emisión de pólizas con Django REST Framework y PostgreSQL, con caché en Redis para el rendimiento." },
                { en: "Document OCR with AWS Textract to speed up capturing and validating policy and user data.", es: "OCR de documentos con AWS Textract para agilizar la captura y validación de datos de pólizas y usuarios." },
                { en: "A multi-vendor pharmacy marketplace module (catalogs, inventory and orders from several pharmacies) inside the same app.", es: "Un módulo de marketplace de farmacia multi-vendedor (catálogos, inventario y pedidos de varias farmacias) dentro de la misma app." },
            ],
            services: ["backend-development"],
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
            challenge: {
                en: "A phone conversation with an AI only feels natural if the answer arrives in under a second and the agent handles interruptions. On top of that, the assistant had to serve several clients, each with its own flows and identity, over real phone lines.",
                es: "Una conversación telefónica con una IA solo se siente natural si la respuesta llega en menos de un segundo y el agente maneja interrupciones. Además, el asistente tenía que atender a varios clientes, cada uno con sus propios flujos e identidad, sobre líneas telefónicas reales.",
            },
            solution: [
                { en: "Real-time pipeline with Pipecat: Deepgram (STT) → GPT-4.1-mini (LLM) → Cartesia (TTS), with barge-in, end-of-turn detection and VAD.", es: "Pipeline en tiempo real con Pipecat: Deepgram (STT) → GPT-4.1-mini (LLM) → Cartesia (TTS), con manejo de interrupciones, detección de fin de turno y VAD." },
                { en: "Telephony bridge PSTN ↔ WebRTC ↔ WebSocket: a broker drives headless Chromium (Playwright) running RingCentral's SIP/WebRTC WebPhone, with a custom PCM/WAV frame serializer.", es: "Puente telefónico PSTN ↔ WebRTC ↔ WebSocket: un broker orquesta Chromium headless (Playwright) con el WebPhone SIP/WebRTC de RingCentral y un serializador de frames PCM/WAV propio." },
                { en: "API-driven conversational flow engine that builds LLM nodes and handlers at runtime from JSON definitions, with episodic memory, per-client identity and prompt-injection protection.", es: "Motor de flujo conversacional dirigido por API que genera nodos y handlers del LLM en tiempo de ejecución desde definiciones JSON, con memoria episódica, identidad por cliente y protección contra inyección de prompts." },
                { en: "4 Dockerized microservices (FastAPI, Express, NestJS and a headless browser) with real-time observability: live transcription and TTFB/token metrics.", es: "4 microservicios en Docker (FastAPI, Express, NestJS y un navegador headless) con observabilidad en tiempo real: transcripción en vivo y métricas de TTFB y tokens." },
            ],
            services: ["ai-voice-agents", "backend-development"],
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
            challenge: {
                en: "Valuing properties was a slow, manual process for internal teams, and it couldn't keep up with thousands of listings per cycle.",
                es: "Valorar propiedades era un proceso manual y lento para los equipos internos, que no daba abasto con miles de listings por ciclo.",
            },
            solution: [
                { en: "Large-scale data extraction pipelines with Scrapy and BeautifulSoup.", es: "Pipelines de extracción de datos a gran escala con Scrapy y BeautifulSoup." },
                { en: "Comparative pricing models and processing pipelines with Pandas.", es: "Modelos de precios comparativos y pipelines de procesamiento con Pandas." },
                { en: "A web app with REST APIs (Django, FastAPI) and a Next.js frontend for internal teams, deployed on AWS.", es: "Una app web con APIs REST (Django, FastAPI) y frontend en Next.js para los equipos internos, desplegada en AWS." },
            ],
            services: ["data-pipelines", "backend-development"],
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
            challenge: {
                en: "A high-volume transcription product has to process large audio files in parallel without making users wait, while storing sensitive identifiers with strict privacy.",
                es: "Un producto de transcripción de alto volumen tiene que procesar archivos de audio grandes en paralelo sin hacer esperar a los usuarios, y a la vez guardar identificadores sensibles con privacidad estricta.",
            },
            solution: [
                { en: "Backend architecture with asynchronous task queues to orchestrate large, parallel transcription jobs.", es: "Arquitectura backend con colas de tareas asíncronas para orquestar trabajos de transcripción grandes y en paralelo." },
                { en: "Privacy-first authentication with irreversible, zero-knowledge hashing for sensitive identifiers.", es: "Autenticación privacy-first con hashing irreversible (zero-knowledge) para identificadores sensibles." },
                { en: "Batch processing for continuous parallel workloads, with system observability standards.", es: "Procesamiento por lotes para cargas paralelas continuas, con estándares de observabilidad del sistema." },
            ],
            services: ["backend-development"],
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
            challenge: {
                en: "Recruiters were spending their time on raw candidate data. The goal was to hand them ranked shortlists and quick summaries instead.",
                es: "Los reclutadores perdían tiempo revisando datos crudos de candidatos. El objetivo era entregarles listas rankeadas y resúmenes rápidos en su lugar.",
            },
            solution: [
                { en: "AI agents that evaluate and rank candidates, combining conversational flows with large-scale data analysis.", es: "Agentes de IA que evalúan y rankean candidatos, combinando flujos conversacionales con análisis de datos a gran escala." },
                { en: "Vector search over metadata-rich candidate records.", es: "Búsqueda vectorial sobre registros de candidatos ricos en metadatos." },
                { en: "Asynchronous batch processing so evaluations run continuously and in parallel.", es: "Procesamiento por lotes asíncrono para que las evaluaciones corran de forma continua y en paralelo." },
            ],
            services: ["ai-voice-agents", "data-pipelines"],
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
            challenge: {
                en: "Business-critical B2B operations depended on manual work and on data copied by hand between CRM, ERP and marketing tools.",
                es: "Operaciones B2B críticas dependían de trabajo manual y de datos copiados a mano entre CRM, ERP y herramientas de marketing.",
            },
            solution: [
                { en: "Requirements analysis with each operational unit to prioritize what to automate first.", es: "Análisis de requisitos con cada unidad operativa para priorizar qué automatizar primero." },
                { en: "n8n workflows extended with Python and JavaScript for event-driven flows.", es: "Flujos en n8n potenciados con Python y JavaScript para lógica event-driven." },
                { en: "Integrations with internal and third-party APIs to keep CRM, ERP and marketing platforms in sync.", es: "Integraciones con APIs internas y de terceros para mantener CRM, ERP y plataformas de marketing sincronizados." },
                { en: "AI capabilities inside the workflows: LLM APIs, vector search and prompt engineering.", es: "Capacidades de IA dentro de los flujos: APIs de LLM, búsqueda vectorial y prompt engineering." },
            ],
            services: ["workflow-automation"],
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
