/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'], // Añade aquí los dominios de las imágenes externas que uses
  },
}

module.exports = nextConfig

