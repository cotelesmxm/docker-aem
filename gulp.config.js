module.exports = function() {

  var srcBase = 'project/aem-dre/branches/releases/1.0/dre-content/src/main/content/jcr_root';
  var cfg = {
    // Source directory references
    srcPaths: {
      lessAll: [
        srcBase + '/**/shop_ford/buy/**/*.less',
        '!' + srcBase + '/**/shop_ford/buy/**/_*.less'
      ],
      lessAllComplete: [
        srcBase + '/**/shop_ford/buy/**/*.less'
      ],
      markupCoreComplete: srcBase + '/apps/shop_ford/buy/**/*.html',
      jsCoreComplete: [
        srcBase + '/apps/shop_ford/buy/components/**/*.js',
        srcBase + '/etc/designs/shop_ford/buy/**/*.js',
        //ignore external libraries
        '!' + srcBase + '/etc/designs/shop_ford/buy/js/libs/**/*.js',
        '!' + srcBase + '/etc/designs/shop_ford/buy/metrics/*.js',
        //ignore any previously minified files
        '!' + srcBase + '/apps/shop_ford/buy/**/*.min.js',
        '!' + srcBase + '/etc/designs/shop_ford/buy/**/*.min.js'
      ],
      js: srcBase + '/**/*.js',
      tpl: srcBase + '/**/*.{jsp,html}',
      xmltxt: [
        srcBase + '/**/*.txt'
      ],
      html: srcBase + '/**/*.html',
      css: srcBase + '/**/*.css',
      images: srcBase + '/**/*.{gif,jpg,png,svg}'
    },
    // Destination directory references
    destPaths: {
      root: "/",
      sbase: srcBase
    }
  }
  return cfg;
};
