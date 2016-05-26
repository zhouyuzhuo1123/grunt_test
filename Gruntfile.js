module.exports=function(grunt){
	grunt.initConfig({
		
		pkg:grunt.file.readJSON('package.json'),
		
		uglify:{
			option:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			build:{
				files: {
						'dist/test-min.js': ['src/test.js'],
						'dist/test1-min.js': ['src/test1.js'],
						'dist/test2-min.js': ['src/test2.js'],
						'dist/test3-min.js': ['src/test3.js']
					  }
				
			}
		},
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			option:{
				jshint:'.jshintrc'
			}
		},
		watch:{
			build:{
				files:['src/*.js','src/*.css'],
				tasks:['jshint','uglify','concat'],
				options:{spawn:false}
			}
		},
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: ['dist/test1-min.js', 'dist/test2-min.js', 'dist/test3-min.js'],
			  dest: 'dist/common.js',
			},
		  },
		
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['jshint','uglify','concat','watch']);
	
};