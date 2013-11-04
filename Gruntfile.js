module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'public/contactlist.js', 'app.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    githooks: {
      all: {
        'pre-commit': 'jshint'
      }
    },
    watch: {
      files: ['Gruntfile.js', 'public/contactlist.js', 'app.js','views/**/*'],
      tasks: ['jshint'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['jshint']); 
  grunt.registerTask('gitCommit', ['jshint','githooks:all']);
};