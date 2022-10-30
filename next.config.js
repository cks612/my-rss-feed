/** @type {import('next').NextConfig} */
const path = require("path");

// Next.js가 버전이 올라가면서 큰 변화로는 babel에서 SWC가 나온 것
// babel에서 사용하는 모든 부분이 대체가 될 수 있도록 변경되었다
// .babelrc를 제거하므로 swc가 활성화되는 기본 요건은 충족
const moduleExports = {
  // 코드를 축소하고 압축하는 부분 - 가장 속도가 빠르다고 알려진 Terser보다 7배 빠르다
  swcMinify: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 2 * 60,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rss",
        permanent: true,
      },
    ];
  },
  compiler: {
    // babel-plugin-styled-components를 설치하고 ssr을 켜줘야 하는데
    // 이 부분을 무척 간단하게 킬 수 있다.
    styledComponents: true,
  },
  // webpack: config => {
  //   config.resolve.modules.push(path.resolve("."));

  //   return config;
  // },
  // modularize imports
  // 전체 모듈을 불러오는게 아니라 불러오고싶은
  // 개별 함수들만 가져올 수 있다
  // 큰 css 라이브러리의 경우 그 크기가 무척이나 커지는 결과가 있기 때문에
  // 이렇게 사용하면 좋다

  // experimental: {
  //   modularizeImports: {
  //     antd: {
  //       transform: "antd/lib/{{member}}",
  //     },
  //     lodash: {
  //       transform: "lodash/{{member}}",
  //     },
  //   },
  // },

  images: {
    domains: [
      "cdn-images-1.medium.com",
      "user-images.githubusercontent.com",
      "blog.kakaocdn.net",
      "d2.naver.com",
      "camo.githubusercontent.com",
      "substackcdn.com",
    ],
  },

  // sentry: {
  //   hideSourceMaps: true,

  //   // This option will automatically provide performance monitoring for Next.js
  //   // data-fetching methods and API routes, making the manual wrapping of API
  //   // routes via `withSentry` redundant.
  //   autoInstrumentServerFunctions: true,
  // },
  // webpack(config) {
  //   const prod = process.env.NODE_ENV === "production";
  //   const plugins = [...config.plugins];
  //   return {
  //     ...config,
  //     mode: prod ? "production" : "development",
  //     devtool: prod ? "hidden-source-map" : "eval",
  //     plugins,
  //   };
  // },
  // };

  // const sentryWebpackPluginOptions = {
  //   // Additional config options for the Sentry Webpack plugin. Keep in mind that
  //   // the following options are set automatically, and overriding them is not
  //   // recommended:
  //   //   release, url, org, project, authToken, configFile, stripPrefix,
  //   //   urlPrefix, include, ignore

  //   silent: true, // Suppresses all logs
  //   // For all available options, see:
  //   // https://github.com/getsentry/sentry-webpack-plugin#options.
  // };

  // // module.exports = withBundleAnalyzer(
  // //   withSentryConfig(moduleExports, sentryWebpackPluginOptions)
  // );
};
module.exports = moduleExports;
