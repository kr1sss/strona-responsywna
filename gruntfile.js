module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'stronaresp.css': 'stronaresp.sass'
        }
      }
  },
  imagemin: {
	  dynamic: {
	        files: [{
	            expand: true,
	            cwd: 'images/',
	            src: ['**/*.{png,jpg,gif}'],
	            dest: 'images/build/'
	        }]
		}
	},
	watch: {
	    scripts: {
	        files: ['*.sass'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    } 
	}
});
  // Load the plugins tasks 
  
  grunt.loadNpmTasks('grunt-sass');
  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};