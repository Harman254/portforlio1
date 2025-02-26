/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'cdn.sanity.io'],
    },
    runtime: 'nodejs',
    transpilePackages: ['framer-motion']
}

module.exports = nextConfig
