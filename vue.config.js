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
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000,
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "~@/styles/main.scss" as *;`,
      },
    },
  },
};
