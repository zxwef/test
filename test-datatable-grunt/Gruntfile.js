module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webpack: {
          build: {
            entry: './js/index.js',
            output: {
                path: './build',
                filename: 'bundle.js'
            },
            watch: true,
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['webpack']);

};
