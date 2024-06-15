module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      enableInSFC: true,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000,
      },
    },
    resolve: {
      extensions: ['*', '.mjs', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
};
