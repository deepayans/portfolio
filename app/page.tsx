import React from 'react';

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
            <a href="#projects" className="hover:text-black transition-colors">Work</a>
            <a href="#stack" className="hover:text-black transition-colors">Stack</a>
            <a href="https://linkedin.com/in/deepayan" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com/deepayans" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-16 max-w-7xl mx-auto pt-20">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            Deploying Machine Learning at Scale
          </div>

          <h1 className="text-6xl md:text-8xl tracking-tighter leading-[0.9] font-serif">
            Engineering <br /> Intelligence.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Data Scientist specialising in predictive modelling, on-device AI, and scalable cloud infrastructure. Bridging the gap between raw data and measurable business impact.
          </p>

          <div className="pt-8">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              View Architecture & Models
            </a>
          </div>
        </div>
      </section>

      {/* Project Showroom */}
      <section id="projects" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Selected Works</h2>
        
        <div className="space-y-32">
          {/* Flagship Project */}
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-gray-100 rounded-[2rem] aspect-video flex items-center justify-center overflow-hidden border border-gray-200">
              <div className="text-gray-400 font-serif text-2xl">Vision Assistant UI</div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-4xl font-serif tracking-tight">Vision Assistant App</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A fully offline, on-device machine learning application designed for visually impaired users. Features real-time object detection and optical character recognition (OCR).
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">TensorFlow Lite</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">Flutter</span>
                <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">ML Kit</span>
              </div>
              <a href="https://github.com/deepayans/SLM-APK-Blind-App" target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                View Source Repository ↗
              </a>
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-[2rem] aspect-[4/3] flex items-center justify-center border border-gray-200">
                 <div className="text-gray-400 font-serif text-xl">Skincare Classifier</div>
              </div>
              <h3 className="text-2xl font-serif tracking-tight">Multi-Label Product Classifier</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Engineered an NLP-based classification model using scikit-learn to categorise over 6,000 skincare products across 33 distinct categories with high precision.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-[2rem] aspect-[4/3] flex items-center justify-center border border-gray-200">
                 <div className="text-gray-400 font-serif text-xl">Spotify RecSys</div>
              </div>
              <h3 className="text-2xl font-serif tracking-tight">Spotify Recommendation System</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Developed an unsupervised learning architecture utilising K-Means clustering to engineer audio features and generate similarity-based track recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section id="stack" className="py-32 px-8 md:px-16 max-w-7xl mx-auto bg-white border-t border-gray-100">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">Core Data & ML</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>Python & Kotlin</li>
              <li>scikit-learn & XGBoost</li>
              <li>PyTorch & TensorFlow</li>
              <li>pandas & NumPy</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">Cloud & MLOps</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>Google Cloud Platform</li>
              <li>BigQuery & Dataflow</li>
              <li>Docker Containerisation</li>
              <li>GitHub Actions (CI/CD)</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif text-2xl border-l-2 border-black pl-4">Frontend & Mobile</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>Flutter & Dart</li>
              <li>Next.js & React</li>
              <li>Tailwind CSS</li>
              <li>On-Device ML (TFLite)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-400 bg-black">
        <p>© {new Date().getFullYear()} Deepayan Sarkar. All rights reserved.</p>
      </footer>
    </main>
  );
}
