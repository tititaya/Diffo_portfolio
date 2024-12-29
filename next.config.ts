import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active le mode strict de React pour détecter les problèmes potentiels.
  output: "standalone",  // Requis pour les déploiements serverless comme sur Vercel.
};

export default nextConfig;
