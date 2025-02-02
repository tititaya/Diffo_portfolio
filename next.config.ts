import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active le mode strict de React pour détecter les problèmes potentiels.
  output: "standalone", // Requis pour les déploiements serverless comme sur Vercel.
  experimental: {
    serverActions: true, // Active les actions côté serveur pour gérer des opérations comme la gestion des fichiers.
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL, // URL de Supabase
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY, // Clé de Supabase
  },
};

export default nextConfig;
