/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ["ja", "en", "zh"],
    defaultLocale: "ja",
    localeDetection: true,
  },
  env: {
    HOST:'http://www.iamwuwei.com'
  }
}

module.exports = nextConfig
