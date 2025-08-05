import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    ignoreBuildErrors:true
  },
  experimental:{
    useCache:true
  },
  images:{
    remotePatterns:[
      {
        hostname:'www.okaidi.ma'
      }
    ]
  }

};

export default nextConfig;
