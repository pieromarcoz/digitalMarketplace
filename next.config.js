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
            'digitalhippo-pieromg.up.railway.app',
        ]
    }
}

module.exports = nextConfig
