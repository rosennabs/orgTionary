/** @type {import('next').NextConfig} */


const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Skip type errors during the build process
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },
};

export default nextConfig;
  