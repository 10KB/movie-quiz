module.exports = {
  head: {
    title: 'Movie quiz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ]
  },
  css: [
    { src: '~/assets/stylesheets/application.scss', lang: 'scss' },
  ],
  store: true,
  build: {
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.loaders.scss = [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              './assets/stylesheets/_shared.scss',
            ],
          },
        },
      ];
    },
  },
  watchers: {
    webpack: {
      poll: true, // Enable webpackDevMiddleware file polling for Windows
    },
  },
};
