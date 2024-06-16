/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        /*remotePatterns: [
            {
                hostname: "localhost",
                pathname: "**",
                port: '3000',
                protocol: 'http'
            }
        ]*/
        domains: [
            'localhost',
            'digitalmarketplace-pieromg.up.railway.app',
        ]
    }
}

module.exports = nextConfig
