module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      src:  './src/*.js',
      spec: './spec/*Spec.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  
};