module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            temp: ['dist/js/scripts.js', 'dist/js/libs.js'],
            all: ['dist/js/*.js']
        },
        jshint: {
            dist: {
                src: ['js/**/*.js']
            }
        },
        concat: {
            scripts: {
                src: ['js/**/*.js'],
                dest: 'dist/js/scripts.js'
            },
            libs: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/vue/dist/vue.min.js',
                    'bower_components/vue-resource/dist/vue-resource.min.js',
                    'bower_components/lodash/dist/lodash.min.js',
                    'bower_components/moment/min/moment.min.js'
                ],
                dest: 'dist/js/libs.js'
            }
        },
        uglify: {
            dist: {
                src: [
                    'dist/js/libs.js',
                    'dist/js/scripts.js'
                ],
                dest: 'dist/js/app.min.js'
            }
        },
        cssmin: {
            all: {
                src: ['css/**/*.css'],
                dest: 'dist/css/style.min.css'
            }
        },
        copy: {
            all: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['jshint', 'clean:all', 'concat:scripts', 'concat:libs', 'uglify', 'cssmin', 'clean:temp', 'copy:all', 'processhtml', 'htmlmin']);
};
