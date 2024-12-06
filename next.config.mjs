/** @type {import('next').NextConfig} */


const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Skip type errors during the build process
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },
};

export default nextConfig;
  