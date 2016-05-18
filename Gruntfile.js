module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
       options: {
          preserveComments: 'some',
          report: 'min',
		  sourceMap: true
       },
       dist: {
          files: {
             'dist/time-duration-picker.min.js': ['src/time-duration-picker.js']
          }
       }
     }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('prep', ['uglify']);
};