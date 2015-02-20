module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'all/themes/prdxn/css/header.css': 'all/themes/prdxn/css/header.scss',       // 'destination': 'source'
        
      }
    }
  }
});
 

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);

};