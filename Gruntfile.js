module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		config: {
			src: 'src',
			dest: 'static',
			dist: 'dist'
		},

		pkg: grunt.file.readJSON('package.json'),

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>',
					src: ['img/*.{png,jpg,gif}'],
					dest: '<%= config.dest %>'
				}]
			}
		},

		sass: {
			options: {
				includePaths: ['node_modules']
			},
			dist: {
				src: ['<%= config.src %>/sass/bulma.sass'],
				dest: '<%= config.src %>/css/bulma.css'
			}
		},

		less: {
			dist: {
				src: ['<%= config.src %>/less/style.less'],
				dest: '<%= config.src %>/css/style.css'
			}
		},

		cssmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>/css',
					src: ['*.css', '!*.min.css'],
					dest: '<%= config.dest %>/css',
					ext: '.min.css'
				}]
			}
		},

		copy: {
			modules: {
				files: [
					{
						expand: true,
						cwd: 'node_modules/font-awesome',
						src: ['css/font-awesome.min.css', 'fonts/**'],
						dest: '<%= config.dest %>'
					}
				]
			}
		},

		clean: {
			css: ['<%= less.dist.dest %>', '<%= sass.dist.dest %>']
		},

		compress: {
			zip: {
				options: {
					archive: '<%= config.dist %>/<%= pkg.name %>-<%= pkg.version %>.zip'
				},
				files : [
					{
						expand: true,
						src: ['static/**', 'templates/**', 'LICENSE', 'README.rst'],
						dest: '/'
					}
				]
			},
			tgz: {
				options: {
					archive: '<%= config.dist %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz'
				},
				files : [
					{
						expand: true,
						src: ['static/**', 'templates/**', 'LICENSE', 'README.rst'],
						dest: '/'
					}
				]
			}
		}

	});

	grunt.registerTask('default', ['imagemin', 'sass', 'less', 'cssmin', 'clean', 'copy', 'compress']);

};
