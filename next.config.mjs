/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // Next re-optimizes an image once its cache entry expires, and the
        // default is only 60s. These are static assets that never change, and
        // re-encoding a multi-megabyte PNG costs seconds of CPU, so re-doing it
        // every minute is pure waste.
        minimumCacheTTL: 2678400, // 31 days
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            // face-api.js pulls @tensorflow/tfjs-core -> node-fetch, which fails
            // to resolve 'fs' and 'encoding' during the server compile. Those
            // failures stop Next emitting its internal pages/_document, and the
            // build then dies with "Cannot find module for page: /_document".
            // It only shows on a cold build — a dev .next already has that file,
            // which is why it looked intermittent.
            // GridScan is client-only (dynamic, ssr:false) so the server never
            // needs this module; mark it external instead of bundling it.
            config.externals = [...(config.externals || []), 'face-api.js'];
        }
        return config;
    },
};

export default nextConfig;
