/** @type {import('next').NextConfig} */

module.exports = ({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/vs4gypuhi/**',
      },
    ],
    minimumCacheTTL: 60,
  },
  //     async redirects() {
  //     return [

  //         {
  //             source: '/',
  //             destination: '/en-in',
  //             permanent: true,
  //         } 



  //     ]
  //   },
  // webpack: function (config) {
  //     config.module.rules.push({
  //         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
  //         use: {
  //             loader: 'url-loader',
  //             options: {
  //                 limit: 100000,
  //                 name: '[name].[ext]'
  //             }
  //         }
  //     })
  //     return config
  // },
  // env: {
  //   RAPIDAPI_KEY: 'process.env.RAPIDAPI_KEY',
  // },
})


