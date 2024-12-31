"use client";

import React from "react";
import Image from "next/image";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-4">
      {/* Icon LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ornel-rony-diffo-tandjong-01737b267/"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:scale-110 transition-transform relative animate-floating"
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={50}
          height={50}
          className="rounded-full shadow-lg group-hover:ring-4 group-hover:ring-blue-500 transition-all"
        />
        {/* Tooltip */}
        <span className="absolute bottom-full mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Voir mon profil LinkedIn
        </span>
      </a>
      {/* Icon GitHub */}
      <a
        href="https://github.com/tititaya"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:scale-110 transition-transform relative animate-floating"
      >
        <Image
          src="/icons/github.png"
          alt="GitHub"
          width={50}
          height={50}
          className="rounded-full shadow-lg group-hover:ring-4 group-hover:ring-gray-500 transition-all"
        />
        {/* Tooltip */}
        <span className="absolute bottom-full mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Accéder à mon GitHub
        </span>
      </a>
    </div>
  );
};

export default FloatingIcons;
