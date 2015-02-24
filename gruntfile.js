
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      src: {
        files: ['**/*.scss','**/*.css', '**/*.php'],
          tasks: ['sass', 'jshint']
      },
      options: {
        livereload: true,
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'all/themes/prdxn/css/header.css': 'all/themes/prdxn/sass/header.scss'       // 'destination': 'source'
        }
      }
    },

    jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      camelcase: true,
      funcscope: true
      globals: {
        jQuery: true
      },
    },
  }
});

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'watch', 'sass']);
 
};
