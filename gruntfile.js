
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      src: {
        files: ['**/*.scss','**/*.css', '**/*.php','all/themes/prdxn/js/customjs/*.js',],
          tasks: ['sass', 'jshint', 'concat', 'uglify', 'cssmin', 'concat_css']
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
          'all/themes/prdxn/css/header.css': 'all/themes/prdxn/sass/header.scss',
	       'all/themes/prdxn/css/homepage.css': 'all/themes/prdxn/sass/homepage.scss'       // 'destination': 'source'
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
  },

  concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["all/themes/prdxn/css/*.css"],
      dest: "all/themes/prdxn/prod/css/styles.css"
    },
  },

  cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'all/themes/prdxn/prod/css/styles.min.css': 'all/themes/prdxn/prod/css/styles.css'
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
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'watch', 'sass', 'concat', 'uglify', 'cssmin', 'concat_css']);

};
