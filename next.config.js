/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['metamanor.mypinata.cloud']
  },
  env:{
    PRIVATE_KEY: b340721b9a6a130569c277879abcc3faf6df728fe19da6b929ca122bbda3b3fc,
  }
}

module.exports = nextConfig
