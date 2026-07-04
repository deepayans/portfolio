import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { MobileNav } from '@/components/MobileNav';
import { CountUp } from '@/components/CountUp';

const CV_URL = "https://drive.google.com/uc?export=download&id=13GzyJi0YHa3JXNdEQcCSWNWTSUsEV2w2";

export default function Portfolio() {
  return (
    <main className="selection:bg-black selection:text-white overflow-hidden bg-[#FAFAFA]">
      <nav className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="w-full flex justify-between items-center py-5 px-6 md:py-6 md:px-16 max-w-7xl mx-auto">
          <div className="font-medium tracking-tight text-sm uppercase">Deepayan Sarkar</div>
          <div className="hidden md:flex gap-6 text-sm text-gray-500">
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Work</a>
            <a href="#stack" className="hover:text-black transition-colors">Stack</a>
            <a href="https://www.linkedin.com/in/deepayansarkar/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
          <MobileNav />
        </div>
      </nav>

      <section className="flex flex-col justify-center min-h-screen px-6 md:px-16 max-w-7xl mx-auto pt-20">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-green-200 bg-green-50 rounded-full text-xs font-mono text-green-800 uppercase tracking-widest flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Available Now • 4–6 Months Internship • Paris, France
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl xs:text-6xl md:text-8xl tracking-tighter leading-[0.9] font-serif">
              Engineering <br /> Intelligence.
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
              Production data engineer turned applied data scientist. Four years driving efficiency at Accenture through large-scale ML analytics systems, currently bridging the gap between raw data and business impact via MSc research in Generative AI and computer vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="pt-6 md:pt-8 flex flex-wrap gap-3 md:gap-4 items-center">
              <a href="mailto:deepayans77@gmail.com" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300">
                {"Let's Talk →"}
              </a>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300">
                {"Download CV ↓"}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="py-16 md:py-32 px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-12 md:mb-16 border-b border-gray-200 pb-4">Enterprise Engineering</h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <FadeIn className="lg:col-span-4" delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-black">Accenture</h3>
            <p className="text-gray-500 mt-2 font-light">2021—2025 • Kolkata, India</p>
          </FadeIn>
          <div className="lg:col-span-8 space-y-16 md:space-y-20">
            <FadeIn delay={0.2} className="space-y-6">
              <div>
                <h4 className="text-xl md:text-2xl font-serif tracking-tight text-gray-800">Software Engineer</h4>
                <p className="text-sm text-gray-400 font-mono mt-1">Sep 2023 — Aug 2025</p>
              </div>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-600">
                Engineered robust Python/SQL data pipelines ensuring zero data loss across production workloads. Delivered 12+ end-to-end analytics projects on GCP on time and within budget by coordinating across 15+ cross-functional stakeholders.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-gray-100">
                <div>
                  <CountUp value="10M+" className="text-2xl md:text-3xl font-light tracking-tighter text-black" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Daily Records Processed</div>
                </div>
                <div>
                  <CountUp value="35%" className="text-2xl md:text-3xl font-light tracking-tighter text-black" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">ETL Time Reduction</div>
                </div>
                <div>
                  <CountUp value="40+" className="text-2xl md:text-3xl font-light tracking-tighter text-green-600" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Hrs Saved Monthly</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="space-y-6">
              <div>
                <h4 className="text-xl md:text-2xl font-serif tracking-tight text-gray-800">Associate Software Engineer</h4>
                <p className="text-sm text-gray-400 font-mono mt-1">Aug 2021 — Sep 2023</p>
              </div>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-600">
                Maintained critical GCP analytics infrastructure (BigQuery, Cloud Storage, Dataflow) supporting business-critical workloads. Analysed large-scale datasets (1M+ rows) to surface trends and anomalies guiding product and marketing decisions.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-gray-100">
                <div>
                  <CountUp value="99.9%" className="text-2xl md:text-3xl font-light tracking-tighter text-black" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">GCP Infrastructure Uptime</div>
                </div>
                <div>
                  <CountUp value="30%" className="text-2xl md:text-3xl font-light tracking-tighter text-green-600" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Lift in Customer Experience via A/B Testing</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-16 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-12 md:mb-16 border-b border-gray-200 pb-4">Professional Validation</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} className="space-y-8 flex flex-col justify-between">
              <blockquote className="text-lg md:text-2xl font-serif italic text-gray-800 leading-relaxed">
                &ldquo;Deepayan is a highly capable and analytical problem-solver. What stands out to me is his ability to take high-level guidance and translate it into rigorous research, confidently navigating challenges like label scarcity through solid statistical validation.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image src="/tianyuan-zhang.png" alt="Tianyuan Zhang" width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-black">Tianyuan Zhang</p>
                  <p className="text-xs text-gray-500">Assistant Professor, KEDGE Business School</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-8 flex flex-col justify-between">
              <blockquote className="text-lg md:text-2xl font-serif italic text-gray-800 leading-relaxed">
                &ldquo;Deepayan took ownership of key deliverables easily. He is a smart and driven individual who consistently explores innovative approaches to problem solving and brings his own unique perspective to the team. He is a quick learner, always eager to pick up new technologies.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image src="/taqabul-nisha.png" alt="Taqabul Nisha" width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-black">Taqabul Nisha</p>
                  <p className="text-xs text-gray-500">Digital Analytics Lead at e& UAE</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-12 md:mb-16 border-b border-gray-200 pb-4">Applied Projects &amp; Hackathons</h2>
        </FadeIn>
        <div className="space-y-20 md:space-y-32">
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <FadeIn className="lg:col-span-7 bg-gray-100 rounded-[2rem] aspect-video flex items-center justify-center overflow-hidden border border-gray-200 relative">
              <Image src="/azure-architecture.jpg" alt="AI Persona Bots Architecture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </FadeIn>
            <FadeIn className="lg:col-span-5 space-y-5 md:space-y-6" delay={0.2}>
              <div className="text-xs font-mono text-blue-600 uppercase tracking-widest">BNP Paribas Hackathon Winner</div>
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight">AI Persona Bots</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                Built a multi-agent analytics platform synthesising 2,438 synthetic customer responses across 8 consumer segments for marketing research.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 mt-4">
                <div>
                  <CountUp value="97.8%" className="text-2xl md:text-3xl font-light tracking-tighter text-black" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Coherence Score</div>
                </div>
                <div>
                  <div className="text-base md:text-lg font-light tracking-tighter text-black mt-2">LLM-as-a-Judge</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Evaluation</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Azure AI Foundry</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">LangChain</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">GPT-4o</span>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            <FadeIn delay={0.1}>
              <div className="space-y-5 md:space-y-6">
                <div className="bg-[#0f0f0f] rounded-[2rem] aspect-video overflow-hidden border border-gray-800 relative group">
                  <Image src="/data-infra.jpg" alt="Multi-Label Classifier" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="text-xs font-mono text-purple-600 uppercase tracking-widest">{"L'Oreal Hackathon"}</div>
                <h3 className="text-2xl font-serif tracking-tight">Skincare Product Classifier</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  Engineered an NLP multi-label classifier across 33 beauty product categories with per-class threshold optimisation.
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Metric Lift</span>
                    <span className="text-lg font-medium text-green-600">~18% Increase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Focus Area</span>
                    <span className="text-lg font-medium">Minority-class recall</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">scikit-learn</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">TF-IDF</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">NLP</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-5 md:space-y-6">
                <div className="bg-[#0f0f0f] rounded-[2rem] aspect-video overflow-hidden border border-gray-800 relative group">
                  <Image src="/vision-app.jpg" alt="Vision Assistant App" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Personal Project</div>
                <h3 className="text-2xl font-serif tracking-tight">Offline Vision Assistant</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  Shipped an end-to-end on-device ML application designed for the visually impaired, managing the full lifecycle from data preparation to deployment.
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Inference Speed</span>
                    <span className="text-lg font-medium text-green-600">&lt; 200ms</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">TensorFlow Lite</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Flutter</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Dart</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">On-Device ML</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-5 md:space-y-6">
                <div className="bg-[#0d1117] rounded-[2rem] aspect-video overflow-hidden border border-gray-800 relative group">
                  <Image src="/tableau-dashboard.jpg" alt="China Trade Transport Analysis Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest">Tableau Public</div>
                <h3 className="text-2xl font-serif tracking-tight">China Trade Transport Analysis</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  Interactive dashboard exploring China&apos;s import/export transport patterns — analysing trade volumes, shipping modes, and commodity flows across global corridors.
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Transport Modes</span>
                    <span className="text-lg font-medium">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Analysis</span>
                    <span className="text-lg font-medium text-green-600">YoY Growth</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Tableau</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">LOD Expressions</span>
                  <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Data Viz</span>
                </div>
                <a
                  href="https://public.tableau.com/app/profile/deepayan.sarkar8273/viz/TransportAnalysisDashboardofChinasImportExport/TransportAnalysisDashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors pt-2"
                >
                  View on Tableau Public ↗
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="stack" className="py-16 md:py-32 px-6 md:px-16 max-w-7xl mx-auto bg-white border-t border-gray-100">
        <FadeIn>
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-12 md:mb-16 border-b border-gray-200 pb-4">Technical Specifications</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <FadeIn delay={0.1} className="space-y-5 md:space-y-6">
            <h4 className="font-serif text-xl md:text-2xl border-l-2 border-black pl-4">GenAI &amp; Machine Learning</h4>
            <ul className="space-y-3 text-gray-600 font-light text-sm md:text-base">
              <li>LLMs, RAG &amp; Multi-Agent Systems</li>
              <li>LangChain &amp; Azure AI Foundry</li>
              <li>HuggingFace Transformers</li>
              <li>scikit-learn &amp; XGBoost</li>
              <li>PyTorch &amp; TensorFlow</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.2} className="space-y-5 md:space-y-6">
            <h4 className="font-serif text-xl md:text-2xl border-l-2 border-black pl-4">Cloud &amp; Data Engineering</h4>
            <ul className="space-y-3 text-gray-600 font-light text-sm md:text-base">
              <li>GCP (BigQuery, Dataflow, Cloud Storage)</li>
              <li>Airflow &amp; ETL Pipelines</li>
              <li>Docker &amp; CI/CD</li>
              <li>MLOps Architecture</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.3} className="space-y-5 md:space-y-6">
            <h4 className="font-serif text-xl md:text-2xl border-l-2 border-black pl-4">Analytics &amp; Programming</h4>
            <ul className="space-y-3 text-gray-600 font-light text-sm md:text-base">
              <li>Python, SQL &amp; Apache Spark</li>
              <li>Power BI &amp; Tableau</li>
              <li>A/B Testing &amp; Statistical Modelling</li>
              <li>Exploratory Data Analysis</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section id="education" className="py-16 md:py-32 px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-12 md:mb-16 border-b border-gray-200 pb-4">Academic &amp; Credentials</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <FadeIn delay={0.1} className="md:col-span-7 space-y-10 md:space-y-12">
            <div className="space-y-4">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Sep 2025 — Oct 2027 • Bordeaux, France</div>
              <h3 className="text-2xl md:text-3xl font-serif tracking-tight">KEDGE Business School</h3>
              <p className="text-gray-600 font-light">MSc in Data Analytics for Business (Grande École Triple Accredited)</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">Eligible for Convention de Stage</div>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-md border border-green-200">French Work Authorisation</div>
              </div>
            </div>
            <div className="space-y-4 pt-8 border-t border-gray-100">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Jul 2017 — May 2021 • Kolkata, India</div>
              <h3 className="text-xl md:text-2xl font-serif tracking-tight text-gray-800">University of Engineering &amp; Management</h3>
              <p className="text-gray-600 font-light">BEng in Electronics &amp; Communication Engineering</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="md:col-span-5 space-y-8">
            <h3 className="text-xl md:text-2xl font-serif tracking-tight border-l-2 border-black pl-4 mb-8">Certifications</h3>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="font-medium text-black">Google Cloud Certified</span>
                <span className="text-sm text-gray-500 font-light">Associate Cloud Engineer (2023)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-black">Microsoft Azure AI Fundamentals</span>
                <span className="text-sm text-gray-500 font-light">AI-900 (2026)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-black">Professional Scrum Master 1</span>
                <span className="text-sm text-gray-500 font-light">Scrum.org (2026)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-black">SQL for Data Science</span>
                <span className="text-sm text-gray-500 font-light">Coursera / UC Davis (2022)</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-[#111111] text-white pt-20 md:pt-32 pb-16 px-6 md:px-16 mt-16 rounded-t-[2rem] md:rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 md:mb-24">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-6">{"Let's build"} <br /> something.</h2>
              <p className="text-gray-400 font-light max-w-sm mb-8 text-sm md:text-base">Currently seeking a 4–6 month End-of-Studies Internship in Paris.</p>
              <a href="mailto:deepayans77@gmail.com" className="inline-flex items-center gap-2 text-base md:text-lg font-medium border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                deepayans77@gmail.com ↗
              </a>
            </div>
            <div className="md:col-span-1 flex flex-col justify-start space-y-4 md:pt-2">
              <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Location</p>
              <p className="text-gray-400 font-light text-sm">Colombes, Hauts-de-Seine</p>
              <p className="text-gray-400 font-light text-sm">Paris, France</p>
              <div className="pt-4">
                <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Availability</p>
                <div className="inline-flex items-center gap-2 px-3 py-2 border border-green-800 bg-green-950 rounded-full text-xs font-mono text-green-400 uppercase tracking-widest">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available Now • Paris
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex flex-col md:items-end justify-start space-y-4 text-gray-400 font-light">
              <p className="text-white font-medium mb-2 uppercase tracking-widest text-xs font-mono">Connect</p>
              <a href="https://www.linkedin.com/in/deepayansarkar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/deepayans" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href={CV_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors mt-4 text-white underline underline-offset-4 decoration-gray-600">Download Resum&eacute;</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-500 font-mono gap-4 md:gap-0">
            <p>&copy; {new Date().getFullYear()} Deepayan Sarkar. All rights reserved.</p>
            <a href="#top" className="hover:text-white transition-colors uppercase tracking-widest">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
