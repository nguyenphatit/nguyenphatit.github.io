const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
