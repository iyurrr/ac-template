const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'));

mix.options({
    hmrOptions: {
        host: 'localhost',
        open: false,
        port: 8080,
    }
});

mix.webpackConfig({
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 8080
    }
});

mix.minify('public/js/app.js');
mix.minify('public/css/app.css');

if (mix.inProduction()) {
    mix.version();
}
