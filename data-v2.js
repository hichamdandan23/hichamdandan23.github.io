// data-v2.js — Real content from hichamdandan.me

const PROJECTS_V2 = [
  {
    num: "01",
    title: "Hummingbird",
    titleIta: "property management, reimagined.",
    year: "2021",
    role: "Software Engineer",
    timeline: "3+ years",
    tags: ["TypeScript", "NodeJS", "VueJS", "Docker", "AWS", "Go", "JavaScript", "ExpressJS", "Microservices", "Python", "REST APIs", "Git", "Agile", "DevOps"],
    bullets: [
    ],
    desc: "Full-featured property management platform with integrations across 200+ properties, automated onboarding that scaled from 2 to 6+ customers per day, and a gate access microservice.",
    images: ['images/Hummingbird1.png', 'images/Hummingbird2.png', 'images/Hummingbird3.png'],
    visual: "v2-vis-2",
    link: "View Details →",
    overview: "Hummingbird is the core product at Tenant Inc — a property management system serving 200+ properties. Over three years I led integrations with third-party lock and access systems, owned the gate access microservice end-to-end, and built automation that tripled onboarding throughput.",
    problem: "Onboarding new customers was manual and slow, capped at two per day. Integrations with lock vendors and access control systems (Derrel's, PTI Clouds, Onity Smart Locks) required bespoke engineering with no shared primitives, and every integration lived in a different part of the codebase.",
    process: [
      "Audited the existing onboarding workflow and identified every manual step that blocked scale — most were configuration tasks that could be encoded into an idempotent, resumable service.",
      "Built a Go application that automated the full customer onboarding pipeline, cutting the process from hours of manual work to a single triggered flow.",
      "Owned the Gate Access microservice end-to-end: schema, API surface, and integration adapters for three major lock vendors across 200+ properties.",
      "Added a PDF report generation microservice so operations teams could pull formatted reports on demand without engineering involvement.",
    ],
    outcomes: [
      { v: "3×", k: "Onboarding throughput" },
      { v: "200+", k: "Properties integrated" },
      { v: "+15%", k: "Monthly lead generation" },
      { v: "4", k: "Interns mentored" },
    ],
  },
  {
    num: "02",
    title: "Logistics Tracker",
    titleIta: "transportation, end to end.",
    year: "2020",
    role: "Full Stack Developer",
    timeline: "17 months",
    tags: ["Spring MVC", "Angular 7", "Microservices", "Docker"],
    images: ['images/iwaco/iwaco (1).png', 'images/iwaco/iwaco (2).png', 'images/iwaco/iwaco (3).png', 'images/iwaco/iwaco (4).png'],
    desc: "Transportation management system for IWACO, a logistics company. Microservices architecture with a real-time dispatcher dashboard, built over 14 months.",
    visual: "v2-vis-6",
    link: "Read Details →",
    overview: "A transportation management system for IWACO covering the full logistics lifecycle — from order dispatch to delivery confirmation. Built on a microservices architecture with an Angular dashboard for operations teams.",
    problem: "IWACO was managing fleet dispatch and delivery tracking through spreadsheets and manual phone calls. There was no central picture of where vehicles were or what the delivery status was at any given time.",
    process: [
      "Mapped the logistics workflow with the operations team to understand every handoff — order creation, dispatch, in-transit updates, and delivery confirmation.",
      "Designed the microservices split around bounded contexts: orders, fleet, tracking, and notifications as separate deployable units.",
      "Built the Spring MVC services and the Angular 7 dashboard for dispatchers, focusing on real-time status updates and route assignment.",
      "Containerized everything with Docker to standardize the deployment pipeline and eliminate environment drift between dev and production.",
    ],
    outcomes: [
      { v: "14mo", k: "End-to-end delivery" },
      { v: "4", k: "Core microservices" },
      { v: "0", k: "Spreadsheets in ops" },
      { v: "Live", k: "Fleet visibility" },
    ],
  },
  {
    num: "03",
    title: "DocDispo",
    titleIta: "medical appointments, online.",
    year: "2018",
    role: "Software Developer",
    timeline: "15 months",
    tags: ["Spring Boot", "Angular 7", "MySQL", "Docker"],
    desc: "Online medical appointment booking platform for Moroccan clinics, with scheduling, automated reminders, and a responsive patient-facing UI. Built at Maroc Annuaire.",
    visual: "v2-vis-4",
    link: "Read Details →",
    overview: "DocDispo.ma lets patients in Morocco book medical appointments directly with clinics. Built during my time at Maroc Annuaire, it replaced phone-based scheduling with a self-service system featuring automated reminders.",
    problem: "Booking a medical appointment in Morocco meant calling clinics during office hours, navigating busy lines, and showing up hoping the slot held. Clinics had no reliable scheduling tool and reminders were nonexistent.",
    process: [
      "Defined the data model around appointments, time slots, and practitioners — making sure overbooking and cancellations were handled as first-class events.",
      "Built the scheduling and reminder system with configurable lead times so each clinic could define its own reminder rules.",
      "Optimized the Angular UI components for speed and responsiveness, targeting low-end devices common in the Moroccan market.",
      "Worked in a two-week Agile sprint cycle, iterating on clinic feedback gathered through weekly demos.",
    ],
    outcomes: [
      { v: "15mo", k: "Build timeline" },
      { v: "0", k: "Double-bookings in production" },
      { v: "2", k: "Reminder channels (SMS + email)" },
      { v: "Mobile", k: "Fully responsive" },
    ],
  },
  {
    num: "04",
    title: "MyTrip",
    titleIta: "travel memories, shared.",
    year: "2020",
    role: "Solo Developer",
    timeline: "4 months",
    tags: ["React Native", "NodeJS", "MongoDB", "Express"],
    desc: "A cross-platform mobile app for documenting and sharing travel stories. Built solo in four months as a personal project exploring React Native.",
    visual: "v2-vis-3",
    link: "Read Details →",
    overview: "A cross-platform mobile app to document trips by uploading photos, adding captions, and sharing itineraries with friends — a focused alternative to full social platforms. Built solo as a personal project to sharpen React Native and mobile-first UX skills.",
    problem: "Travel photos live scattered across camera rolls and chat threads. I wanted a focused space to document a trip as it happens — structured by place, not by timestamp — and share it as a coherent story.",
    process: [
      "Bootstrapped with Expo for fast on-device iteration, keeping the feedback loop under a minute for UI changes.",
      "Designed the data model around trips and stops rather than a flat photo feed — a trip is a document, not a timeline.",
      "Built the Node/Express API with MongoDB for flexible schema iteration; the model changed frequently in the first six weeks.",
      "Focused the UX on single-handed navigation: every primary action reachable from the bottom of the screen, no deeply nested menus.",
    ],
    outcomes: [
      { v: "4mo", k: "Solo build, shipped to device" },
      { v: "2", k: "Platforms (iOS + Android)" },
      { v: "1", k: "Screen to start a new trip" },
      { v: "100%", k: "Offline photo capture" },
    ],
  },
];

const EXPERIENCE_V2 = [
  {
    period: "2021 — Now",
    now: true,
    role: "Software Engineer",
    company: "Tenant Inc",
    location: "Remote",
    bullets: [
      "Led integrations for Derrel's, PTI Clouds, and Onity Smart Locks across 200+ properties on the Hummingbird platform.",
      "Built a Go application automating customer onboarding, scaling throughput from 2 to 6+ customers per day.",
      "Owned the Gate Access microservice end-to-end and built a PDF report generation service for ops teams.",
      "Increased monthly lead generation by 15% through platform improvements.",
      "Mentored four interns through their first production contributions.",
    ],
    tags: ["TypeScript", "Go", "NodeJS", "VueJS", "Docker", "AWS"],
  },
  {
    period: "2018 — 2019",
    role: "Software Developer",
    company: "Maroc Annuaire",
    location: "Morocco",
    bullets: [
      "Built DocDispo.ma, an online medical appointment booking platform for Moroccan clinics.",
      "Designed and implemented the appointment scheduling and automated reminder system.",
      "Optimized Angular UI components for speed and responsiveness on low-end devices.",
      "Delivered in a two-week Agile sprint cycle with iterative clinic feedback.",
    ],
    tags: ["Spring Boot", "Angular 7", "MySQL", "Docker"],
  },
  {
    period: "2019 — 2021",
    role: "M.Sc. Computer Science",
    company: "Maharishi International University",
    location: "Fairfield, Iowa",
    bullets: [
      "Graduate degree in Computer Science focused on software engineering and distributed systems.",
      "Built MyTrip Mobile and other projects to deepen full-stack and mobile development skills.",
    ],
    tags: ["Distributed Systems", "Software Engineering"],
  },
  {
    period: "2014 — 2018",
    role: "B.Sc. Computer Science",
    company: "Ibn Zohr University",
    location: "Agadir, Morocco",
    bullets: [
      "Undergraduate degree in Computer Science with first practical projects in web and mobile development.",
      "Built Mihani.ma, Mihani Mobile, and the Agilisys website as coursework and self-initiated projects.",
    ],
    tags: ["Algorithms", "Web Development", "Mobile"],
  },
];

const SKILLS_V2 = {
  "Languages": ["JavaScript", "TypeScript", "Go", "Python", "Java", "SQL", "HTML5", "CSS3"],
  "Backend & Data": ["NodeJS", "ExpressJS", "Spring Boot", "MySQL", "MongoDB", "REST APIs", "Microservices"],
  "Infrastructure": ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  "Frontend": ["VueJS", "Angular", "React Native", "React"],
  "Practice": ["System Design", "Agile", "DevOps", "Mentoring", "API Design"],
};

const STRIP_ITEMS_V2 = ['TypeScript', 'Go', 'Java', 'Python', 'JavaScript', 'NodeJS', 'VueJS', 'ExpressJS', 'Spring Boot', 
  'Docker', 'AWS', 'MySQL', 'NoSQL', 'REST APIs', 'React',
  'Angular', 'React Native', 'Microservices', 'CI/CD', 'Git', 'Linux', 
  'System Design', 'Agile', 'DevOps', 'Mentoring'];

window.PROJECTS_V2 = PROJECTS_V2;
window.EXPERIENCE_V2 = EXPERIENCE_V2;
window.SKILLS_V2 = SKILLS_V2;
window.STRIP_ITEMS_V2 = STRIP_ITEMS_V2;
