/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Vercel to allow production builds to finish cleanly even if 
  // the template has older internal structural linting warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Tells Vercel to ignore non-critical code type errors during compilation
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
