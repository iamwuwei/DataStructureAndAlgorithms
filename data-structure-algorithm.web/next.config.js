/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ["ja", "en", "zh"],
    defaultLocale: "ja",
    localeDetection: true,
  },
}

module.exports = nextConfig
