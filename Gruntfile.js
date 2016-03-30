var path = require('path');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
	
	jshint: {
		files: ['html/*.js', 'models/*.js', 'bower_components/*.js', 'test/*.js'],
	   	   options : {
			"curly": true,
			"eqeqeq": true,
			"immed": false,
			"newcap": false,
			"sub": false,
			"eqnull": true,
			"node": true,
			reporter: require('jshint-html-reporter'),
		        reporterOutput: 'jshint-report.html'
 			},
			
			
			
        bower: {
  dev: {
    dest: 'html/*.js',
    options: {
      expand: true
    }
      report:
  }
},
         watch: {
            server: {
                files: ['/**/*.js'],
                tasks: ['jshint', 'nodemon'],
                options: {
                    interrupt: true
                }
            }
        }
	},
	});
	    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bower');
    
	grunt.registerTask('default', ['jshint','bower', 'watch']);
	};