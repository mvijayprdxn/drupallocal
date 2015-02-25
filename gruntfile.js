
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      src: {
        files: ['**/*.scss','**/*.css', '**/*.php'],
          tasks: ['sass', 'jshint', 'concat', 'uglify']
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
          'all/themes/prdxn/css/style.css': 'all/themes/prdxn/sass/header.scss'       // 'destination': 'source'
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
      funcscope: true,
      globals: {
        jQuery: true
      }
    }
  },


  concat: {
    options: {
      separator: ' ',
    },
    dist: {
      src: 'all/themes/prdxn/js/customjs/*.js',
      dest: 'all/themes/prdxn/prod/js/script.js',
    },
  },

  uglify: {
    my_target: {
      files: {
        'all/themes/prdxn/prod/js/script.min.js': 'all/themes/prdxn/prod/js/script.js'
      }
    }
  }

});

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint', 'watch', 'sass', 'concat', 'uglify']);
 
};
