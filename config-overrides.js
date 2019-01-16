const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');


function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {

    //配置别名
    config.resolve.alias = {
        '@': resolve('src')
    }

    // ant样式按需加载
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );

    return config;
}