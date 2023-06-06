// @ts-check
/**
 * @type {import('next').NextConfig}
 **/

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const path = require('path');
const withPWA = require('next-pwa');
const WorkerPlugin = require("worker-plugin");
const runtimeCaching = require('next-pwa/cache');
const withModernizr = require('next-plugin-modernizr');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const withTM = require('next-transpile-modules')(['@fancyapps/ui', '@googlemaps/typescript-guards']); // pass the modules you would like to see transpiled

module.exports = async (phase, { defaultConfig }) => {
    const headers = async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    }
                ]
            },
            // VIDEO HEADERS
            {
                source: '/:all*(mp4|webm)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value:
                            'public, max-age=84600, must-revalidate'
                    }
                ]
            }
        ]
    }

    const nextConfig = {
        headers,
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            const newConfig = config;
            newConfig.plugins.push(
                withBundleAnalyzer({
                    enabled: process.env.ANALYZE === 'true',
                })
            );
            if (!isServer) {
                newConfig.plugins.push(
                    new WorkerPlugin({
                        // use "self" as the global object when receiving hot updates.
                        globalObject: "self"
                    })
                );
            }
            return newConfig;
        },
        i18n: {
            locales: ['en'],
            defaultLocale: 'en'
        },
        async rewrites() {
            const rewrites = await fetch(process.env.SCHEME + process.env.API_URL + '/rewrites');
            return await rewrites.json();
        },
        async redirects() {
            return [
                {
                    source: '/property/:property/:all',
                    destination: '/',
                    permanent: true
                }
            ]
        },
        compiler: {
            // ssr and displayName are configured by default
            styledComponents: true
        },
        poweredByHeader: false,
        swcMinify: false,
        compress: false,
        reactStrictMode: true,
        productionBrowserSourceMaps: true,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')]
        },
        images: {
            domains: [
                's3-eu-central-1.amazonaws.com',
                'loggia-cdn.s3.eu-central-1.amazonaws.com'
            ],
            formats: ['image/webp'],
            minimumCacheTTL: 86400
        },
        optimizeFonts: true
    }

    var nextConfigWithPWA = null;

    if(!(phase === PHASE_DEVELOPMENT_SERVER)){
        nextConfigWithPWA = withPWA({
            pwa: {
                dest: 'public',
                register: true,
                skipWaiting: true,
                runtimeCaching,
                buildExcludes: [/manifest.json$/],
                maximumFileSizeToCacheInBytes: 5000000
            },
            ...nextConfig
        });
    }

    return withTM(withModernizr(phase === PHASE_DEVELOPMENT_SERVER ? nextConfig : nextConfigWithPWA));
};