// data-v2.js — Real content from hichamdandan.me

const PROJECTS_V2 = [
  {
    num: "01",
    title: "UpLearnNow",
    titleIta: "AI reasoning, grounded.",
    year: "2026",
    role: "AI Software Engineer",
    timeline: "9 mos",
    tags: ["React Native", "Expo", "FastAPI", "Python", "PostgreSQL", "pgvector", "Redis", "RAG", "Next.js"],
    bullets: [],
    desc: "Production cross-platform AI educational application featuring mobile OCR document scanning, sub-80ms hybrid RAG retrieval across 10,000+ embeddings, and circuit-breaker Redis caching.",
    images: ['images/uplearnnow/img1.png', 'images/uplearnnow/img2.png'],
    visual: "v2-vis-1",
    link: "View Details →",
    overview: "UpLearnNow is an AI-powered educational platform delivering specialized reasoning grounded in verified student records. As AI Software Engineer, I engineered the end-to-end stack spanning React Native/Expo mobile apps, Next.js web portals, an async FastAPI backend with pgvector semantic retrieval, and low-latency Redis caching.",
    problem: "Processing complex multi-page IEP documents and psychological evaluations required high-accuracy OCR extraction and ultra-low-latency semantic retrieval (<100ms) without running up excessive LLM inference token costs or suffering cache failover stalls.",
    process: [
      "End-to-End Product Engineering: Built and shipped production mobile (iOS & Android via React Native/Expo), customer-facing web, and admin backoffice (Next.js) apps powered by an async FastAPI backend and PostgreSQL (pgvector).",
      "Document Ingestion and OCR Intelligence: Engineered mobile camera document scanning and multi-format upload (up to 20MB), utilizing automated OCR pipelines to parse 50+ page IEPs, evaluations, and test scores with 94% extraction accuracy.",
      "Sub-100ms Hybrid RAG Engine: Architected an async semantic retrieval pipeline across 10,000+ document embeddings, achieving <80ms vector search latency to ground LLM reasoning in verified student data.",
      "High-Throughput Redis Caching and Resilience: Integrated Redis for sub-millisecond chat history and storage presigned URL caching, designing a circuit-breaker fallback mechanism that prevents chat latency during cache failovers.",
      "Zero-Overhead Ledger and Cost Optimization: Built a detached in-memory telemetry queue (1,000 capacity, 250ms batch flushes) tracking 1,000+ events/sec with 0ms chat overhead, cutting LLM inference costs by 35% via prompt context caching.",
      "Tokenized Design System and Accessibility: Built a cross-platform design system (30+ accessible components, semantic design tokens, WCAG compliance) supporting seamless English and Spanish localization across 15,000+ sessions.",
    ],
    outcomes: [
      { v: "<80ms", k: "Vector search latency" },
      { v: "94%", k: "OCR extraction accuracy" },
      { v: "35%", k: "Inference cost reduction" },
      { v: "15k+", k: "Localized sessions" },
    ],
  },
  {
    num: "02",
    title: "Hummingbird",
    titleIta: "property management, reimagined.",
    year: "2021 — 2025",
    role: "Software Engineer",
    timeline: "4 yrs 1 mo",
    tags: ["Node.js", "Go", "AWS", "Kafka", "Redis", "MySQL", "DynamoDB", "Redshift", "Vue.js", "Docker", "Microservices", "IoT"],
    bullets: [],
    desc: "Enterprise property management platform serving 200+ facilities. Architected IoT gate access microservices, event-driven delinquency engine, multi-tenant database routing, and high-concurrency onboarding automation.",
    images: ['images/Hummingbird1.png', 'images/Hummingbird2.png', 'images/Hummingbird3.png'],
    visual: "v2-vis-2",
    link: "View Details →",
    overview: "Hummingbird is the core enterprise product at Tenant Inc — an end-to-end property management system serving 200+ enterprise storage facilities. Over four years across Software Developer and Software Engineer roles, I architected core microservices for physical gate access and IoT locks, built an automated event-driven delinquency engine, scaled our multi-tenant database routing tier, and built high-concurrency tooling that tripled onboarding throughput.",
    problem: "Enterprise facilities required real-time physical synchronization across disparate IoT controllers, programmatic delinquency lockouts without manual audits, resilient high-throughput database routing under heavy billing cycles, and automated client onboarding to eliminate manual ingestion bottlenecks.",
    process: [
      "Smart Gate and Lock Integrations: Architected and maintained the Gate Access microservice in Node.js, integrating APIs with IoT edge controllers and smart locks (PTI Cloud, Onity, Brivo, Noke, OpenTech); scaled access management across 200+ enterprise storage facilities.",
      "Gate Access Hours and Schedules: Engineered custom access scheduling in Node.js and Express.js, allowing managers to define authorized entry hours and automatically enforcing them at on-site gate keypads.",
      "Event-Driven Delinquency and Lockout Engine: Designed an automated delinquency pipeline using Node.js, Redis, and BullMQ/Kafka that programmatically triggers physical gate lockouts and overlocks upon non-payment and instantly restores access upon reconciliation, removing 100% of manual gate audits.",
      "High-Throughput Multi-Tenant Data Tier: Engineered a dynamic database routing layer using AWS DynamoDB for tenant shard resolution, implementing automatic Read/Write replica query splitting (MySQL pools with 500 max connections) and dual-querying AWS Redshift for enterprise reporting.",
      "Tooling and Onboarding Automation: Engineered a concurrent Go (Golang) onboarding CLI/service to automate tenant data extraction, transformation, and ingestion, expanding client onboarding throughput by 200% (from 2 to 6+ facilities per day).",
      "Asynchronous PDF Microservice: Built an isolated document generation microservice utilizing Node.js, Hummus, and AWS S3 to stream 25+ complex financial ledgers and operational reports (General Ledger, Daily Deposit, AR Aging), eliminating main thread blocking.",
      "Resiliency, Observability and Tracing: Integrated distributed request tracing (trace-id), New Relic APM, and automated Slack operational alerts across microservices, maintaining 99.9%+ system reliability during peak billing cycles.",
      "Technical Leadership: Mentored 4 engineers and interns on system design, microservices decoupling, and automated testing, accelerating feature delivery and code maintainability.",
    ],
    outcomes: [
      { v: "200+", k: "Enterprise facilities scaled" },
      { v: "100%", k: "Manual gate audits removed" },
      { v: "99.9%+", k: "Peak billing reliability" },
      { v: "+200%", k: "Onboarding throughput" },
    ],
  },
  {
    num: "03",
    title: "Logistics Tracker",
    titleIta: "transportation, end to end.",
    year: "2018 — 2019",
    role: "Full Stack Developer",
    timeline: "1 yr 5 mos",
    tags: ["Spring MVC", "Angular 7", "Microservices", "Docker", "MySQL"],
    images: ['images/iwaco/iwaco (1).png', 'images/iwaco/iwaco (2).png', 'images/iwaco/iwaco (3).png', 'images/iwaco/iwaco (4).png'],
    desc: "Transportation management platform at Maroc Annuaire. Bounded-context microservices architecture with an Angular 7 dispatcher dashboard for real-time fleet route management and containerized deployments.",
    visual: "v2-vis-6",
    link: "Read Details →",
    overview: "A transportation management system for logistics operations covering the full dispatch lifecycle — from order dispatch to in-transit updates and delivery confirmation. Built at Maroc Annuaire with Spring MVC microservices and an Angular 7 dispatcher interface.",
    problem: "Managing logistics handoffs, fleet dispatch, and tracking through manual spreadsheets caused coordination delays and zero real-time operational visibility across fleet routes.",
    process: [
      "Logistics Workflow Mapping: Mapped the logistics workflow with the operations team to understand every handoff — order creation, dispatch, in-transit updates, and delivery confirmation.",
      "Bounded-Context Architecture: Designed the microservices split around bounded contexts: orders, fleet, tracking, and notifications as separate deployable units.",
      "Dispatcher Operations Platform: Built the Spring MVC services and the Angular 7 dashboard for dispatchers, focusing on real-time status updates and route assignment.",
      "Dockerized Standardization: Containerized everything with Docker to standardize the deployment pipeline and eliminate environment drift between dev and production.",
    ],
    outcomes: [
      { v: "1 yr 5m", k: "Production delivery" },
      { v: "4", k: "Core microservices" },
      { v: "100%", k: "Docker containerized" },
      { v: "Real-time", k: "Fleet route visibility" },
    ],
  },
];

const EXPERIENCE_V2 = [
  {
    period: "Feb 2026 — Present",
    duration: "9 mos",
    now: true,
    role: "AI Software Engineer",
    company: "UpLearnNow · Contract",
    location: "Bellevue, WA · Remote",
    bullets: [
      "End-to-End Product Engineering: Built and shipped production mobile (iOS & Android via React Native/Expo), customer-facing web, and admin backoffice (Next.js) apps powered by an async FastAPI backend and PostgreSQL (pgvector).",
      "Document Ingestion and OCR Intelligence: Engineered mobile camera document scanning and multi-format upload (up to 20MB), utilizing automated OCR pipelines to parse 50+ page IEPs, evaluations, and test scores with 94% extraction accuracy.",
      "Sub-100ms Hybrid RAG Engine: Architected an async semantic retrieval pipeline across 10,000+ document embeddings, achieving <80ms vector search latency to ground LLM reasoning in verified student data.",
      "High-Throughput Redis Caching and Resilience: Integrated Redis for sub-millisecond chat history and storage presigned URL caching, designing a circuit-breaker fallback mechanism that prevents chat latency during cache failovers.",
      "Zero-Overhead Ledger and Cost Optimization: Built a detached in-memory telemetry queue (1,000 capacity, 250ms batch flushes) tracking 1,000+ events/sec with 0ms chat overhead, cutting LLM inference costs by 35% via prompt context caching.",
      "Tokenized Design System and Accessibility: Built a cross-platform design system (30+ accessible components, semantic design tokens, WCAG compliance) supporting seamless English and Spanish localization across 15,000+ sessions.",
    ],
    tags: ["React Native", "Expo", "FastAPI", "Python", "PostgreSQL", "pgvector", "Redis", "RAG", "Next.js"],
  },
  {
    period: "Sep 2022 — Jun 2025",
    duration: "2 yrs 10 mos",
    role: "Software Engineer",
    company: "Tenant Inc. · Full-time",
    location: "Newport Beach, CA",
    bullets: [
      "Smart Gate and Lock Integrations: Architected and maintained the Gate Access microservice in Node.js, integrating APIs with IoT edge controllers and smart locks (PTI Cloud, Onity, Brivo, Noke, OpenTech); scaled access management across 200+ enterprise storage facilities.",
      "Gate Access Hours and Schedules: Engineered custom access scheduling in Node.js and Express.js, allowing managers to define authorized entry hours and automatically enforcing them at on-site gate keypads.",
      "Event-Driven Delinquency and Lockout Engine: Designed an automated delinquency pipeline using Node.js, Redis, and BullMQ/Kafka that programmatically triggers physical gate lockouts and overlocks upon non-payment and instantly restores access upon reconciliation, removing 100% of manual gate audits.",
      "High-Throughput Multi-Tenant Data Tier: Engineered a dynamic database routing layer using AWS DynamoDB for tenant shard resolution, implementing automatic Read/Write replica query splitting (MySQL pools with 500 max connections) and dual-querying AWS Redshift for enterprise reporting.",
      "Resiliency, Observability and Tracing: Integrated distributed request tracing (trace-id), New Relic APM, and automated Slack operational alerts across microservices, maintaining 99.9%+ system reliability during peak billing cycles.",
      "Technical Leadership: Mentored 4 engineers and interns on system design, microservices decoupling, and automated testing, accelerating feature delivery and code maintainability.",
    ],
    tags: ["Node.js", "Express.js", "Redis", "BullMQ", "Kafka", "AWS DynamoDB", "MySQL", "AWS Redshift", "IoT", "Microservices"],
  },
  {
    period: "Jun 2021 — Sep 2022",
    duration: "1 yr 4 mos",
    role: "Software Developer",
    company: "Tenant Inc.",
    location: "Newport Beach, CA",
    bullets: [
      "Tooling and Onboarding Automation: Engineered a concurrent Go (Golang) onboarding CLI/service to automate tenant data extraction, transformation, and ingestion, expanding client onboarding throughput by 200% (from 2 to 6+ facilities per day).",
      "Asynchronous PDF Microservice: Built an isolated document generation microservice utilizing Node.js, Hummus, and AWS S3 to stream 25+ complex financial ledgers and operational reports (General Ledger, Daily Deposit, AR Aging), eliminating main thread blocking.",
      "Full-Stack Rental and E-Commerce Flow: Redesigned the consumer reservation and checkout pipeline using Vue.js, Vuex, and RESTful APIs, reducing friction and driving a 15% increase in monthly lead conversions.",
    ],
    tags: ["Go", "Node.js", "Vue.js", "Vuex", "AWS S3", "REST APIs", "Automation"],
  },
  {
    period: "Jul 2018 — Nov 2019",
    duration: "1 yr 5 mos",
    role: "Full Stack Developer",
    company: "MAROC ANNUAIRE · Full-time",
    location: "Agadir, Morocco · On-site",
    bullets: [
      "Logistics Workflow Mapping: Mapped the logistics workflow with the operations team to understand every handoff — order creation, dispatch, in-transit updates, and delivery confirmation.",
      "Bounded-Context Architecture: Designed the microservices split around bounded contexts: orders, fleet, tracking, and notifications as separate deployable units.",
      "Dispatcher Operations Platform: Built the Spring MVC services and the Angular 7 dashboard for dispatchers, focusing on real-time status updates and route assignment.",
      "Dockerized Standardization: Containerized everything with Docker to standardize the deployment pipeline and eliminate environment drift between dev and production.",
    ],
    tags: ["Spring MVC", "Spring Boot", "Angular 7", "Docker", "Microservices", "MySQL"],
  },
  {
    period: "Oct 2024 — Jun 2025",
    role: "Master of Science, Computer Science",
    company: "Maharishi International University",
    location: "Fairfield, Iowa",
    bullets: [
      "Enterprise Architecture & Applied AI: Master of Science in Computer Science focusing on enterprise software architecture, full-stack systems, and applied artificial intelligence.",
      "Generative AI & Machine Learning: Core coursework in Generative AI & Machine Learning integration for modern web applications.",
      "Distributed Systems & Data: Advanced study in Enterprise Architecture & Distributed Software Systems, Database Management Systems (DBMS), and Big Data processing.",
      "Theory into Practice: Algorithms, Data Structures & Modern Programming Practices, culminating in Computer Science Theory in Practice (Industry Practicum).",
    ],
    tags: ["Machine Learning", "Big Data", "Distributed Systems", "Enterprise Architecture", "AI Integration"],
  },
  {
    period: "2014 — 2018",
    role: "Bachelor of Science, Computer Science",
    company: "Ibno Zohr University",
    location: "Agadir, Morocco",
    bullets: [
      "Development & Engineering of Computer Applications: Bachelor of Science in Computer Science focusing on software development and engineering of computer applications.",
      "Software Engineering Foundations: Built academic coursework and real-world web/mobile applications with a strong foundation in algorithms and systems programming.",
    ],
    tags: ["Algorithms", "Data Structures", "Software Engineering", "Web Development"],
  },
];

const SKILLS_V2 = {
  "Languages": ["Python", "JavaScript", "TypeScript", "Go", "Java", "SQL", "HTML5", "CSS3"],
  "AI & Data": ["FastAPI", "RAG", "pgvector", "PostgreSQL", "Redis", "Kafka", "AWS Redshift", "DynamoDB", "MySQL", "MongoDB"],
  "Backend & Systems": ["Node.js", "Express.js", "Spring MVC", "Spring Boot", "REST APIs", "Microservices", "Distributed Systems"],
  "Frontend & Mobile": ["React Native", "Expo", "React", "Next.js", "Vue.js", "Vuex", "Angular 7"],
  "Cloud & DevOps": ["AWS", "Docker", "CI/CD", "Git", "Linux", "New Relic", "System Design"],
};

const STRIP_ITEMS_V2 = [
  'Python', 'FastAPI', 'React Native', 'TypeScript', 'Go', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis',
  'AWS', 'Kafka', 'Docker', 'pgvector', 'Vue.js', 'Spring Boot', 'MySQL', 'DynamoDB',
  'Microservices', 'System Design', 'CI/CD', 'Git'
];

window.PROJECTS_V2 = PROJECTS_V2;
window.EXPERIENCE_V2 = EXPERIENCE_V2;
window.SKILLS_V2 = SKILLS_V2;
window.STRIP_ITEMS_V2 = STRIP_ITEMS_V2;
