import type { NextConfig } from 'next'
import { baseURL } from './@core/configs/clientConfig'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  },
  async rewrites() {
    return [
      {
        source: `${baseURL}/:api_path*`,
        destination: `/api/:api_path*`
      }
    ]
  }
}

export default nextConfig
