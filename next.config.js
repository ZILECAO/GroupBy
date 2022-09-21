/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['metamanor.mypinata.cloud']
  }
}

module.exports = nextConfig
