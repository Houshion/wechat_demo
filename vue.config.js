const path = require('path');
module.exports = {
    publicPath: './',
    outputDir: 'dists',

    configureWebpack: {
        resolve: {
            alias: {
                '~': path.join(__dirname, 'src/components/oceans'),
            }
        }
    },

    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}