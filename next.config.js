/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['']
  },
  env:{
    PRIVATE_KEY: '',
  }
}

module.exports = nextConfig
