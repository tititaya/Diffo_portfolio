"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);

  // Effet de comptage pour les statistiques
  useEffect(() => {
    const interval = setInterval(() => {
      setExperience((prev) => (prev < 2 ? prev + 1 : prev));
      setProjects((prev) => (prev < 5 ? prev + 1 : prev));
      setCertifications((prev) => (prev < 3 ? prev + 1 : prev));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4"
    >
      {/* Photo de profil */}
      <div className="relative">
        <Image
          src="/images/diffo.jpg"
          alt="Photo de profil d&apos;Ornel Rony"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
        <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-purple-500 to-blue-500"></div>
      </div>

      {/* Nom et présentation */}
      <h2 className="text-4xl font-bold mt-4">Hey 👋, Je suis Ornel Rony</h2>
      <p className="text-lg mt-4 max-w-lg">
        Étudiant en M1 Systèmes Embarqués, passionné par l&apos;électronique, le développement de
        systèmes embarqués, et la résolution de problèmes techniques.
      </p>

      {/* Boutons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Mes Projets
        </a>
        <a
          href="/CV_Ornel_Rony.pdf"
          className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          Télécharger CV
        </a>
      </div>

      {/* Statistiques */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{experience}+</span>
          <p>Ans d&apos;expérience</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{projects}+</span>
          <p>Projets réalisés</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{certifications}+</span>
          <p>Certifications obtenues</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
