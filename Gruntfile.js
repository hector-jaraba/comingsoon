module.exports = function (grunt){
  grunt.initConfig({
    uglify: {
      dist: {
        src: 'js/vendor/*.js',
        dest: 'test.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
}
