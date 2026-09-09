import type { NextConfig } from 'next';

const slug = 'aura-studio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/demos/${slug}`,
  assetPrefix: `/demos/${slug}`,
  env: {
    NEXT_PUBLIC_BASE_PATH: `/demos/${slug}`,
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
