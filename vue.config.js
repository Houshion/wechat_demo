const path = require('path');
module.exports = {
    publicPath: './',
    outputDir: 'dists',

    devServer: {
        host: '127.0.0.1',
        port: 10086,
    },

    configureWebpack: {
        resolve: {
            alias: {
                '~': path.join(__dirname, 'src/components/oceans'),
                // DLC鑫海按摩椅项目公用路径
                '~xh': path.join(__dirname, 'src/xhamy'),
            }
        }
    },

    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}