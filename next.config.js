// // /next.config.js
// /** @type {import('next/dist/next-server/server/config-shared').NextConfig} */

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public', // swの出力ディレクトリ
//     // runtimeCaching: []
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co'],
  },
};

module.exports = nextConfig;
