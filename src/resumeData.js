export const profile = {
  name: "Naveen Rajesh",
  role: "Cybersecurity & Backend Developer",
  location: "Virudhunagar, Tamil Nadu, India",
  email: "22pc22@psgtech.ac.in",
  phone: "+91-88073-54140",
  linkedin: "https://www.linkedin.com/in/Naveen-Rajesh",
  github: "https://github.com/naveen-rajesh",
  resumeUrl: "/Naveen-R-Resume.pdf",
  summary:
    "Integrated M.Sc. Cyber Security student at PSG College of Technology building security tooling, backend systems, APIs, threat intelligence workflows, and machine learning projects.",
  status: "Open to cybersecurity, backend, and security engineering roles",
  commandLine: "naveen@portfolio:~$ ./init --focus security --mode build",
  quickFacts: [
    { label: "Degree", value: "Integrated M.Sc. Cyber Security" },
    { label: "Graduation", value: "2027" },
    { label: "CGPA", value: "7.51" },
    { label: "Languages", value: "English, Tamil, Hindi" }
  ],
  highlights: [
    "Built CTI automation with IOC extraction, visualization, Tkinter workflows, and exports to PDF, DOCX, TXT, and STIX.",
    "Developed APIs and web projects across lead intelligence, real-time stocks, food classification, grocery billing, image encryption, and RAG-based threat intelligence."
  ]
};

export const skills = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript"]
  },
  {
    title: "Platforms",
    items: ["Windows", "Linux", "Kali Linux"]
  },
  {
    title: "Tools",
    items: ["Wireshark", "Git", "Burp Suite", "Excel", "Figma"]
  },
  {
    title: "Interests",
    items: ["Computer Networks", "Operating Systems", "Backend Development", "OOPS", "Network Security", "Machine Learning"]
  }
];

export const experience = [
  {
    role: "Industry-Based Work Experience",
    company: "JPMorganChase",
    period: "July 2025 - Dec 2025",
    description:
      "Supported M&A, capital raising, credit, and markets advisory through financial research and analytics.",
    impact: [
      "Applied Python and web scraping to automate data collection.",
      "Analyzed market and company data for transaction and client analysis.",
      "Generated research-driven insights for advisory workflows."
    ]
  }
];

export const projects = [
  {
    name: "YCLead API",
    type: "Backend API",
    description:
      "API built to power lead discovery workflows, exposing structured lead data for search, qualification, and downstream product integrations.",
    stack: ["API Design", "Backend", "Lead Data", "Automation"],
    signal: "Lead intelligence endpoint"
  },
  {
    name: "Real-Time Stock API",
    type: "Market data API",
    description:
      "Backend API for serving real-time stock data to applications, focused on fast retrieval, clean response shapes, and finance-ready integration.",
    stack: ["API Design", "Market Data", "Realtime", "Backend"],
    signal: "Live market data delivery"
  },
  {
    name: "CyberMind",
    type: "Threat intelligence assistant",
    description:
      "Retrieval-Augmented Generation assistant for cybersecurity analysts, enabling natural language queries on threat reports with real-time responses.",
    stack: ["RAG", "Vector Embeddings", "LLMs", "Threat Intel"],
    signal: "Semantic retrieval + generated analysis"
  },
  {
    name: "Automatic CTI Report Generator",
    type: "Security operations tooling",
    description:
      "Python tool that automates CTI reporting with IOC extraction, visualization, Tkinter input flows, and multi-format exports.",
    stack: ["Python", "Tkinter", "STIX", "PDF/DOCX"],
    signal: "Standardized security reports"
  },
  {
    name: "Quick Cart",
    type: "Computer vision billing",
    description:
      "Streamlit app that classifies grocery items from images and generates bills through EfficientNet, object detection, and price data.",
    stack: ["Python", "Streamlit", "EfficientNet", "Object Detection"],
    signal: "Automated grocery billing"
  },
  {
    name: "Food Item Classification",
    type: "Machine learning",
    description:
      "Food classification system using a Random Forest classifier with a focus on strong model performance and usability for non-technical users.",
    stack: ["Python", "Machine Learning", "Random Forest"],
    signal: "Accessible ML workflow"
  },
];

export const education = [
  {
    school: "PSG College of Technology, Coimbatore",
    degree: "Integrated M.Sc. Cyber Security",
    period: "2022 - 2027",
    details: "Department of Applied Mathematics and Computational Sciences. Current CGPA: 7.51."
  },
  {
    school: "RJ Mantra English School, Virudhunagar",
    degree: "XII Higher Secondary, ISC",
    period: "2022",
    details: "Score: 88.40%."
  },
  {
    school: "RJ Mantra English School, Virudhunagar",
    degree: "X SSLC, ICSE",
    period: "2020",
    details: "Score: 85.16%."
  }
];

export const achievements = [
  "Google Cybersecurity Professional Certificate",
  "Selected as one of the top three teams from PSG College of Technology in Flipkart Grid 6.0, advancing to Level 1.2"
];
