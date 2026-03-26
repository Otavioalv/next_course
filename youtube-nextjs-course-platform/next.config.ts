import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Libera o SVG
    contentDispositionType: 'attachment', // Força o navegador a tratar como anexo se tentarem abrir direto
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Desativa qualquer script dentro do SVG
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ]
  }
};

export default nextConfig;