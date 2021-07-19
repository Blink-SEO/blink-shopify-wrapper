/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
 require('dotenv').config();

 module.exports = {
   files: [
     './assets/**/*.{css,js}',
     './layout/**/*.liquid',
     './sections/**/*.liquid',
     './snippets/**/*.liquid',
     './templates/**/*.liquid',
   ],
   proxy: process.env.PROXY_URL,
   https: {
     key: process.env.SSL_KEY,
     cert: process.env.SSL_CRT,
   },
   // Delay reload so themekit has chance to push files to server
   reloadDelay: 2000,
   //   Places the BrowserSync injection just before the closing </body> tag so it plays nicely with Shopify
   snippetOptions: {
     rule: {
       match: /<\/body>/i,
       fn: function (snippet, match) {
         return snippet + match;
       },
     },
   },
   open: false,
 };