"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TopImpact from "@/components/TopImpact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Lazy-load heavy sections — deferred until needed
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: false });
const Recommendations = dynamic(() => import("@/components/Recommendations"), { ssr: false });

export default function Page() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <AnimatedBackground />
      <Nav />

      <main
        className="transition-opacity duration-700 pb-20 md:pb-0"
        style={{ opacity: splashDone ? 1 : 0 }}
      >
        <Hero />
        <TopImpact />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
        <Recommendations />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
