"use client";

import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <main className="selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="w-full flex justify-between items-center py-6 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="font-medium tracking-tight text-sm uppercase">
            Deepayan Sarkar
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Work</a>
            <a href="#stack" className="hover:text-black transition-colors">Stack</a>
            <a href="https://www.linkedin.com/in/deepayansarkar/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-16 max-w-7xl mx-auto pt-20">
        <div className="max-w-4xl space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-green-200 bg-green-50 rounded-full text-xs font-mono text-green-800 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Available July 2026 • 4-6 Months Internship • Paris, France
          </div>

          <h1 className="text-6xl md:text-8xl tracking-tighter leading-[0.9] font-serif">
            Engineering <br /> Intelligence.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Production data engineer turned applied data scientist. Four years building large-scale ML analytics systems at Accenture, currently completing an MSc in Data Analytics for Business with a focus on Generative AI and computer vision.
          </p>

          {/* High-Converting CTAs */}
          <div className="pt-8 flex flex-wrap gap-4 items-center">
            <a 
              href="mailto:deepayans77@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Let's Talk →
            </a>
            <a 
              href="/Deepayan_Sarkar_General_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise Experience Section */}
      <section id="experience" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Enterprise Engineering</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif tracking-tight">Accenture</h3>
            <p className="text-gray-500 mt-2">Software Engineer • 2021—2025</p>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-xl font-light leading-relaxed text-gray-700">
              Built production ML analytics and data pipeline systems for international clients across the UK, US, and Singapore, sustaining 99.9% uptime.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-4xl font-light tracking-tighter text-black">10M+</div>
                <div className="text-sm text-gray-500 mt-2">Records Processed Daily (GCP Dataflow & BigQuery)</div>
              </div>
              <div>
                <div className="text-4xl font-light tracking-tighter text-black">35%</div>
                <div className="text-sm text-gray-500 mt-2">Reduction in Pipeline Processing Time</div>
              </div>
              <div>
                <div className="text-4xl font-light tracking-tighter text-black">40+ hrs</div>
                <div className="text-sm text-gray-500 mt-2">Saved Monthly via 50+ Automated KPI Dashboards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showroom */}
      <section id="projects" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Applied Projects & Hackathons</h2>
        
        <div className="space-y-32">
          {/* Flagship Project 1: BNP Paribas */}
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-gray-100 rounded-[2rem] aspect-video flex items-center justify-center overflow-hidden border border-gray-200 relative group">
               <Image 
                src="/azure-architecture.jpg" 
                alt="AI Persona Bots Architecture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-widest">BNP Paribas Hackathon Winner</div>
              <h3 className="text-4xl font-serif tracking-tight">AI Persona Bots</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Built a multi-agent analytics platform synthesising 2,438 synthetic customer responses across 8 consumer segments for marketing research.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 mt-4">
                <div>
                  <div className="text-3xl font-light tracking-tighter text-black">97.8%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Accuracy</div>
                </div>
                <div>
                  <div className="text-lg font-light tracking-tighter text-black mt-2">LLM-as-a-Judge</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Evaluation</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Azure AI Foundry</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">LangChain</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">GPT-4o</span>
              </div>
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            
            {/* Project 2: L'Oreal Hackathon */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-[2rem] aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200 relative group">
                 <Image 
                  src="/data-infra.jpg" 
                  alt="Multi-Label Classifier"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              <div className="text-xs font-mono text-purple-600 uppercase tracking-widest">L'Oreal Hackathon</div>
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
            </div>

            {/* Project 3: Vision Assistant */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-[2rem] aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200 relative group">
                 <Image 
                  src="/vision-app.jpg" 
                  alt="Vision Assistant App"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
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
                <span className="px-3 py-1 mt-2 text-xs border border-gray-300 rounded-full">TensorFlow Lite</span>
                <span className="px-3 py-1 mt-2 text-xs border border-gray-300 rounded-full">Flutter</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section id="stack" className="py-32 px-8 md:px-16 max-w-7xl mx-auto bg-white border-t border-gray-100">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">GenAI & Machine Learning</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>LLMs, RAG & Multi-Agent Systems</li>
              <li>LangChain & Azure AI Foundry</li>
              <li>scikit-learn & XGBoost</li>
              <li>PyTorch & TensorFlow</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">Cloud & Data Engineering</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>GCP (BigQuery, Dataflow)</li>
              <li>Airflow & ETL Pipelines</li>
              <li>Docker & CI/CD</li>
              <li>MLOps Architecture</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">Analytics & Programming</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>Python, SQL & Apache Spark</li>
              <li>Power BI & Tableau</li>
              <li>A/B Testing & Statistical Modelling</li>
              <li>Exploratory Data Analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic & Credentials (Recruiter Trust Markers) */}
      <section id="education" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Academic & Credentials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          
          {/* Education Column */}
          <div className="md:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Sep 2025 — Present • Bordeaux, France</div>
              <h3 className="text-3xl font-serif tracking-tight">KEDGE Business School</h3>
              <p className="text-gray-600 font-light">MSc in Data Analytics for Business (Grande École Triple Accredited)</p>
              <div className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">
                Eligible for Convention de Stage (French Work Authorisation)
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-100">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Jul 2017 — May 2021 • Kolkata, India</div>
              <h3 className="text-2xl font-serif tracking-tight text-gray-800">University of Engineering & Management</h3>
              <p className="text-gray-600 font-light">BEng in Electronics & Communication Engineering</p>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="md:col-span-5 space-y-8">
             <h3 className="text-2xl font-serif tracking-tight border-l-2 border-black pl-4 mb-8">Certifications</h3>
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
          </div>
          
        </div>
      </section>

      {/* Expanded Utility Footer */}
      <footer className="bg-[#111111] text-white pt-32 pb-16 px-8 md:px-16 mt-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-6">Let's build <br/> something.</h2>
              <p className="text-gray-400 font-light max-w-sm mb-8">
                Currently seeking a 4-6 month End-of-Studies Internship in Paris, starting July 2026. 
              </p>
              <a 
                href="mailto:deepayans77@gmail.com"
                className="inline-flex items-center gap-2 text-lg font-medium border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
              >
                deepayans77@gmail.com ↗
              </a>
            </div>
            
            <div className="flex flex-col md:items-end justify-start space-y-4 text-gray-400 font-light">
              <p className="text-white font-medium mb-2 uppercase tracking-widest text-xs font-mono">Connect</p>
              <a href="https://www.linkedin.com/in/deepayansarkar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/deepayans" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="/Deepayan_Sarkar_General_CV.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors mt-4 text-white underline underline-offset-4 decoration-gray-600">Download Resumé</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-500 font-mono">
            <p>© {new Date().getFullYear()} Deepayan Sarkar. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 md:mt-0 hover:text-white transition-colors uppercase tracking-widest"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
