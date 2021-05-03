const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('prerender')
        .use(PrerenderSPAPlugin, [path.join(__dirname, 'dist'), ['/']]);
    }
  },
};
