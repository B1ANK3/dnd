

module.exports = {
    configureWebpack: config => {
        config['devtool'] = 'inline-source-map'
    },
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .loader('ts-loader')
            .tap(options => {
                return options
            })
    },
    pluginOptions: {}
}
