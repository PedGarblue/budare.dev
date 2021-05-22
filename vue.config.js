module.exports = {
  /*
  // pre render plugin causes a crash in production build depending on the server node version (i think)
  // uncomment this if you find a way to make this work properly (and also remember the imports)
  chainWebpack: config => {
   if (process.env.NODE_ENV === 'production') {
     config
       .plugin('prerender')
       .use(PrerenderSPAPlugin, [path.join(__dirname, 'dist'), ['/']]);
    }
  },
  */
};
