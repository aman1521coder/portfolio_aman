// ── COLOR PALETTE ─────────────────────────────────────────────────────
export const K = {
  bg:          "#0b0c16",
  bgPanel:     "#0f1120",
  bgCard:      "#111525",
  bgDark:      "#070810",
  border:      "#1a1e35",
  borderHot:   "#2a4a9a",
  borderGlow:  "#3b82f6",
  blue:        "#3b82f6",
  blueDim:     "#1d3a7a",
  blueBright:  "#60a5fa",
  purple:      "#8b5cf6",
  purpleDim:   "#4c1d95",
  purpleBright:"#a78bfa",
  cyan:        "#06b6d4",
  cyanBright:  "#22d3ee",
  cyanGlow:    "rgba(6,182,212,0.18)",
  white:       "#e2e8f0",
  dim:         "#2d3453",
  dimBright:   "#64748b",
  yellow:      "#eab308",
  red:         "#ef4444",
  orange:      "#f97316",
  green:       "#22c55e",
};

// ── PROJECTS ──────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    name: "ai-automation-suite",
    title: "AI Automation Suite",
    stack: "Python · n8n · OpenAI · FastAPI",
    status: "PROD",
    rating: "⭐ 4.9",
    desc: "Enterprise-grade AI workflow platform with n8n orchestration, LLM pipelines, and real-time monitoring. Serving 3 live clients.",
  },
  {
    name: "golang-microservices",
    title: "Go Microservices Platform",
    stack: "Golang · gRPC · PostgreSQL · Redis · K8s",
    status: "PROD",
    rating: "⭐ 5.0",
    desc: "High-throughput microservices at 50k+ req/s. Service mesh, distributed tracing, Kubernetes auto-scaling.",
  },
  {
    name: "n8n-workflow-engine",
    title: "Custom n8n Workflow Engine",
    stack: "n8n · Node.js · Python · REST",
    status: "LIVE",
    rating: "⭐ 4.8",
    desc: "100+ custom n8n nodes and complex automation workflows: CRM integrations, AI content pipelines, data transformations.",
  },
  {
    name: "fullstack-saas",
    title: "Full-Stack SaaS Dashboard",
    stack: "React · Golang · PostgreSQL · Stripe · AWS",
    status: "PROD",
    rating: "⭐ 5.0",
    desc: "Multi-tenant SaaS with subscription billing, real-time analytics, OAuth 2.0. Zero-downtime deploys on AWS.",
  },
  {
    name: "python-data-pipeline",
    title: "Data Processing Pipeline",
    stack: "Python · Airflow · Kafka · BigQuery",
    status: "PROD",
    rating: "⭐ 4.9",
    desc: "Scalable ETL handling 10M+ records/day. Streaming ingestion, anomaly detection, automated reporting.",
  },
];

// ── SKILLS ────────────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Backend",       items: [["Golang",82],["Python",87],["FastAPI",80],["gRPC",74],["REST/GraphQL",83]] },
  { cat: "Frontend",      items: [["React",79],["TypeScript",74],["Next.js",72],["TailwindCSS",84]] },
  { cat: "AI/Automation", items: [["n8n",92],["LangChain",80],["OpenAI API",87],["AI Agents",82],["RAG Systems",76]] },
  { cat: "Databases",     items: [["PostgreSQL",83],["Redis",77],["MongoDB",71],["BigQuery",69]] },
  { cat: "DevOps/Cloud",  items: [["Docker",81],["Kubernetes",73],["AWS",75],["CI/CD",79],["Terraform",66]] },
];

// ── CONTACTS ──────────────────────────────────────────────────────────
// ⚠️  REPLACE these values with your real details
export const CONTACTS = [
  { icon: "✉",  label: "Email",    val: "amanesu15151@gmail.com",               href: "mailto:amanesu15151@gmail.com" },
  { icon: "⬡",  label: "GitHub",   val: "aman1521coder",        href: "https://github.com/aman1521coder" },
  { icon: "in", label: "LinkedIn", val: "linkedin.com/in/amanuel-esayase-8b941532b",   href: "https://linkedin.com/in/amanuel-esayase-8b941532b" },
];

// ── BOOT SEQUENCE ─────────────────────────────────────────────────────
export const BOOT = [
  [0,   "dim",    ""],
  [80,  "blue",   "  █████╗ ███╗   ███╗ █████╗ ███╗   ██╗██╗   ██╗███████╗██╗"],
  [150, "blue",   "  ██╔══██╗████╗ ████║██╔══██╗████╗  ██║██║   ██║██╔════╝██║"],
  [220, "blue",   "  ███████║██╔████╔██║███████║██╔██╗ ██║██║   ██║█████╗  ██║"],
  [290, "purple", "  ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║"],
  [360, "purple", "  ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗"],
  [430, "purple", "  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝"],
  [520, "cyan",   "           E S A Y A S E  —  Full Stack Developer"],
  [610, "dim",    "  ──────────────────────────────────────────────────────────────"],
  [760, "dim",    "  Initializing Amanuel's universe..."],
  [900, "blue",   "  [  +  ] The dev who turns coffee into scalable systems"],
  [1050,"dim",    "  [  +  ] Loading Golang backend engine...                ✓"],
  [1180,"dim",    "  [  +  ] Loading Python & AI toolkit...                  ✓"],
  [1320,"cyan",   "  [  +  ] Spinning up n8n automation workflows...         ✓"],
  [1460,"dim",    "  [  +  ] Mounting React frontend modules...              ✓"],
  [1600,"dim",    "  [  +  ] Connecting PostgreSQL, Redis, MongoDB...        ✓"],
  [1740,"blue",   "  [  +  ] Deploying to AWS, GCP, Kubernetes...           ✓"],
  [1880,"dim",    "  [  +  ] Bootstrapping AI agents & LLM pipelines...     ✓"],
  [2020,"green",  "  [  ✓  ] 5+ years · Production-grade · Zero disasters   ✓"],
  [2170,"green",  "  [  ✓  ] 50+ Upwork jobs · Top Rated Plus · $0 disputes ✓"],
  [2320,"purple", "  [  ✓  ] Ships fast. Breaks nothing. Delivers always.   ✓"],
  [2490,"dim",    "  ──────────────────────────────────────────────────────────────"],
  [2680,"yellow", "  Welcome. You just loaded Amanuel Esayase's world."],
  [2880,"white",  "  Type 'help' to explore — he built this for you."],
];

// ── HELP COMMANDS ─────────────────────────────────────────────────────
export const HELP_CMDS = [
  ["whoami",              "Developer profile + photo"],
  ["neofetch",            "System overview"],
  ["ls projects/",        "List all projects"],
  ["cat projects/<name>", "Open project details"],
  ["cat skills.txt",      "Skills with live progress bars"],
  ["contacts",            "Open contacts window"],
  ["upwork",              "Upwork stats dashboard"],
  ["sudo hire-me",        "[ TOP SECRET ]"],
  ["clear",               "Clear terminal"],
];

// ── TAB AUTOCOMPLETE LIST ─────────────────────────────────────────────
export const AUTOCOMPLETE = [
  "help","whoami","neofetch","ls projects/",
  "cat skills.txt","contacts","upwork",
  "sudo hire-me","clear","cat projects/",
];
