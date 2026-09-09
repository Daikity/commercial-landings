import type { NextConfig } from 'next';

const slug = 'commercial-landings';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/demos/${slug}`,
  assetPrefix: `/demos/${slug}`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
