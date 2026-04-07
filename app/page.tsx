"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TopImpact from "@/components/TopImpact";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [splashDone, setSplashDone] = useState(false);


  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <AnimatedBackground />

      <Nav />

      <main
        className="transition-opacity duration-700"
        style={{ opacity: splashDone ? 1 : 0 }}
      >
        <Hero />
        <TopImpact />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
