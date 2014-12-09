module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      src:  './src/*.js',
      spec: './spec/*Spec.js'
    },

    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    }
  });


  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'jasmine_node']);
  
};