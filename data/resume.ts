export const resume = {
  basics: {
    name: "Deepayan Sarkar",
    initials: "DS",
    title: "Data Scientist & Analytics Professional",
    summary:
      "Data Science student with 4+ years of industry experience in data analytics at Accenture, transitioning into machine learning and AI. Skilled in Python, SQL, and statistical modeling, with hands-on experience building NLP models, recommendation systems, and predictive analytics solutions using scikit-learn, XGBoost, and TensorFlow. Experienced in working with large-scale datasets, ETL pipelines, and A/B testing to drive data-informed decisions. Passionate about applying machine learning to real-world problems and seeking a Data Science Intern role to further develop and deploy scalable AI solutions.",
    shortSummary:
      "Data is not just my profession — it's how I think. 4+ years delivering data pipelines and analytics at scale at Accenture. Finalising an MSc in Data Analytics for Business at KEDGE Business School — open to end-of-studies internship and CDI opportunities across the EU.",
    location: "Bordeaux, France",
    email: "deepayans77@gmail.com",
    phone: "+33-605-843-923",
    availability: "Now",
    workAuth: "France Work Authorisation",
    links: {
      linkedin: "https://linkedin.com/in/deepayansarkar",
      github: "https://github.com/deepayans",
      tableau:
        "https://public.tableau.com/app/profile/deepayan.sarkar8273",
    },
  },

  topImpact: [
    { metric: "10M+", label: "Records Processed Daily", icon: "database" },
    { metric: "35%", label: "Processing Time Reduction", icon: "zap" },
    { metric: "<1 hr", label: "Research Time (was 4–8 wks)", icon: "clock" },
  ],

  experience: [
    {
      company: "Accenture",
      role: "Data Analyst / Data Science Associate",
      dates: "Aug 2021 — Aug 2025",
      location: "Kolkata, India",
      type: "Full-time · 4 years",
      bullets: [
        "Engineered data pipelines processing 10M+ records daily and developed Power BI dashboards tracking 50+ KPIs, reducing processing time by 35% and improving operational efficiency by 20% through ETL optimisation and data visualisation solutions.",
        "Designed and maintained cloud infrastructure on Google Cloud Platform (BigQuery, Dataflow, Cloud Storage) ensuring 99.9% uptime, conducted A/B testing and statistical analysis on datasets with 1M+ rows to optimise product features and improve customer experience by 30%.",
        "Collaborated with 15+ cross-functional stakeholders to deliver 12+ analytical projects, automated reporting processes saving 40+ hours monthly, and mentored junior analysts on data analysis best practices and SQL optimisation techniques.",
      ],
      metrics: [
        { value: "10M+", label: "Records/day" },
        { value: "35%", label: "Faster processing" },
        { value: "99.9%", label: "Uptime" },
        { value: "40+ hrs", label: "Saved/month" },
      ],
      tags: ["Python", "SQL", "Power BI", "BigQuery", "Dataflow", "GCP", "A/B Testing", "ETL"],
    },
  ],

  education: [
    {
      school: "KEDGE Business School",
      degree: "Master of Science in Data Analytics for Business",
      level: "Master 2nd Year",
      period: "Sep 2025 — Present",
      location: "Bordeaux, France",
      current: true,
    },
    {
      school: "University of Engineering & Management",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      level: "BTech",
      period: "Jul 2017 — May 2021",
      location: "Kolkata, India",
      current: false,
    },
  ],

  projects: [
    {
      id: "loreal",
      title: "Multi-Label Skincare Product Classifier",
      context: "L'Oréal Hackathon · KEDGE Business School",
      type: "NLP · Hackathon",
      stack: ["LinearSVC", "One-vs-Rest", "TF-IDF", "scikit-learn", "Python", "NLP"],
      bullets: [
        "Developed and deployed a multi-label text classification model using LinearSVC and One-vs-Rest classification to classify 6,240 products across 33 categories, achieving a weighted F1 Score of 0.67, in line with industry benchmarks.",
        "Engineered NLP pipeline with TF-IDF vectorisation (word and character n-grams) and optimised per-class thresholds for improved performance.",
      ],
      metrics: [
        { value: "0.67", label: "F1 Score" },
        { value: "6,240", label: "Products" },
        { value: "33", label: "Categories" },
      ],
      color: "cyan",
      link: "https://github.com/deepayans/Multi-Label-Classification-for-Skincare-Products",
    },
    {
      id: "spotify",
      title: "Spotify Music Recommendation System",
      context: "Unsupervised Learning · KEDGE Business School",
      type: "ML · Clustering",
      stack: ["K-Means", "Python", "scikit-learn", "Feature Engineering", "Silhouette Index"],
      bullets: [
        "Built an unsupervised music recommendation system by applying K-Means clustering to song-level audio features to uncover latent user taste patterns and evaluated performance using the Silhouette, Calinski-Harabasz, and Davies-Bouldin indices.",
        "Performed feature engineering and preprocessing to enhance clustering stability and designed a similarity-based recommendation approach to enable personalised and cold-start recommendations.",
      ],
      metrics: [
        { value: "K-Means", label: "Algorithm" },
        { value: "3", label: "Eval Indices" },
        { value: "Cold-Start", label: "Enabled" },
      ],
      color: "violet",
      link: "https://github.com/deepayans/Spotify-Music-Recommendation-System",
    },
    {
      id: "bnp",
      title: "AI Persona Bots for Marketing Research",
      context: "BNP Paribas & CGI Hackathon · KEDGE Business School",
      type: "GenAI · Hackathon",
      stack: ["Azure AI Foundry", "GPT-4o", "NLP", "Sentiment Analysis", "Python"],
      bullets: [
        "Built AI-simulated customer personas using Azure AI Foundry and GPT-4o to accelerate credit product launches, processing 2,438 survey responses across 8 distinct customer segments with 88.6% relevance, 97.8% coherence, and 100% fluency scores.",
        "Engineered end-to-end pipeline with persona generation, NLP-based sentiment analysis, and automated insight synthesis, reducing marketing research time from 4–8 weeks to under 1 hour whilst maintaining high-quality customer simulation accuracy.",
      ],
      metrics: [
        { value: "88.6%", label: "Relevance" },
        { value: "97.8%", label: "Coherence" },
        { value: "100%", label: "Fluency" },
        { value: "<1 hr", label: "vs 4–8 wks" },
      ],
      color: "amber",
      link: null,
    },
    {
      id: "vision",
      title: "Offline Vision Assistant for the Visually Impaired",
      context: "Personal Project · Flutter / Supervised ML",
      type: "Mobile App · SLM",
      stack: ["Flutter", "Dart", "TensorFlow Lite", "Camera API", "Text-to-Speech", "Speech-to-Text", "Gemma 3 1B", "Small Language Model", "SDGs"],
      bullets: [
        "Built a fully offline Android accessibility app using Flutter that leverages on-device supervised machine learning to identify objects and scenes in real time, converting visual information into spoken audio feedback for visually impaired users.",
        "Integrated camera, flutter_tts, and speech_to_text packages to enable a hands-free, voice-driven experience — allowing users to ask questions and receive instant audio descriptions without an internet connection.",
        "Implemented a Provider-based state architecture and CI/CD workflow via GitHub Actions to automate APK builds, ensuring reliable releases and a production-ready deployment pipeline.",
      ],
      metrics: [
        { value: "100%", label: "Offline" },
        { value: "Real-time", label: "Inference" },
        { value: "Android", label: "Platform" },
      ],
      color: "green",
      link: "https://github.com/deepayans/SML-APK-Blind-App",
    },
    {
      id: "tableau",
      title: "China Import/Export Transport Analysis",
      context: "Tableau Public",
      type: "Data Visualisation",
      stack: ["Tableau"],
      bullets: [
        "Built an interactive Tableau dashboard exploring China's import/export transport patterns — analysing trade volumes, shipping modes, and commodity flows across global corridors.",
        "Designed multi-layered filters and drill-down views enabling dynamic exploration of trade data by year, commodity type, and transport mode (sea, air, rail, road), surfacing actionable insights for supply chain analysis.",
        "Applied calculated fields and LOD expressions to derive year-over-year growth rates and market share breakdowns, visualising shifts in China's top trading partners and strategic export corridors.",
      ],
      metrics: [
        { value: "4", label: "Transport Modes" },
        { value: "YoY", label: "Growth Trends" },
      ],
      color: "pink",
      link: "https://public.tableau.com/app/profile/deepayan.sarkar8273/viz/TransportAnalysisDashboardofChinasImportExport/TransportAnalysisDashboard",
    },
  ],

  skills: [
    {
      category: "Programming & Machine Learning",
      icon: "code",
      items: [
        "Python", "pandas", "NumPy", "Matplotlib", "scikit-learn",
        "XGBoost", "LightGBM", "PyTorch", "TensorFlow",
        "SQL", "Statistical Modelling", "Supervised Learning",
        "Unsupervised Learning", "Natural Language Processing (NLP)",
        "Deep Learning", "Feature Engineering",
        "Model Evaluation & Cross-Validation", "MLOps",
      ],
    },
    {
      category: "Data Tools",
      icon: "bar-chart",
      items: ["Power BI", "Tableau", "Google Analytics", "Jupyter", "Git", "Apache Spark", "Airflow"],
    },
    {
      category: "Cloud & Databases",
      icon: "cloud",
      items: [
        "Google Cloud Platform",
        "BigQuery",
        "Dataflow",
        "Cloud Storage",
        "Azure AI Foundry",
        "SQL Server",
      ],
    },
    {
      category: "Core Competencies",
      icon: "target",
      items: [
        "Recommendation Systems",
        "Forecasting",
        "Customer Analytics",
        "A/B Testing",
        "ETL Pipelines",
        "Model Interpretability",
      ],
    },
  ],

  certifications: [
    {
      name: "Google Cloud Certified: Associate Cloud Engineer",
      issuer: "Google Cloud",
      icon: "☁️",
      year: "2023",
    },
    {
      name: "Microsoft Azure AI Fundamentals — AI-900",
      issuer: "Microsoft",
      icon: "🤖",
      year: "2026",
    },
    {
      name: "SQL for Data Science",
      issuer: "Coursera · UC Davis",
      icon: "🗄️",
      year: "2022",
    },

  ],

  achievements: [
    { metric: "10M+", label: "Records processed daily", context: "ETL pipelines at Accenture", group: "scale" },
    { metric: "50+", label: "KPIs tracked", context: "Power BI dashboards", group: "scale" },
    { metric: "35%", label: "Processing time reduced", context: "ETL optimisation", group: "impact" },
    { metric: "20%", label: "Operational efficiency gain", context: "Data visualisation solutions", group: "impact" },
    { metric: "99.9%", label: "Cloud uptime maintained", context: "GCP infrastructure", group: "reliability" },
    { metric: "1M+", label: "Rows analysed", context: "A/B testing & statistical analysis", group: "scale" },
    { metric: "30%", label: "Customer experience uplift", context: "Product feature optimisation", group: "impact" },
    { metric: "15+", label: "Stakeholders collaborated", context: "Cross-functional delivery", group: "leadership" },
    { metric: "12+", label: "Analytical projects shipped", context: "Accenture", group: "leadership" },
    { metric: "40+", label: "Hours saved monthly", context: "Automated reporting", group: "impact" },
    { metric: "0.67", label: "Weighted F1 Score", context: "L'Oréal multi-label classifier", group: "ml" },
    { metric: "6,240", label: "Products classified", context: "L'Oréal hackathon (33 categories)", group: "ml" },
    { metric: "88.6%", label: "Relevance score", context: "AI Persona Bots — BNP Paribas", group: "ml" },
    { metric: "97.8%", label: "Coherence score", context: "AI Persona Bots — BNP Paribas", group: "ml" },
    { metric: "100%", label: "Fluency score", context: "AI Persona Bots — BNP Paribas", group: "ml" },
    { metric: "<1 hr", label: "Research turnaround", context: "Reduced from 4–8 weeks", group: "impact" },
  ],
};

export type Resume = typeof resume;
