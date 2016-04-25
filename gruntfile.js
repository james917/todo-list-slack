module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    // less to css 
    less: {
      root: {
        options: {
          compress:false
        },
        files: {
          'public/css/main.css' : 'less/main.less'
        }
      }
    },
    
 
    
    // all js files are concat in the root level structure 
    concat: {
      options:{
        stripBanners:false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      root_bootstrap: {
        src: [
          './bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js',
          
          ],
        dest: 'public/js/bootstrap.js'
      },
      
      root_angular: {
          src:[ './bower_components/angular/angular.js'],
        dest: 'public/js/angular.js'
      },
  
      root_app: {
        src:['js/**/*.js'],
        dest: 'public/js/app.js'
      }
    
      
      
      
    },
    
 


    // watch tasks
    watch: {
      root_bootstrap:{
            files:['./bower_components/bootstrap/js/transition.js',
              './bower_components/bootstrap/js/alert.js',
              './bower_components/bootstrap/js/button.js',
              './bower_components/bootstrap/js/carousel.js',
              './bower_components/bootstrap/js/collapse.js',
              './bower_components/bootstrap/js/dropdown.js',
              './bower_components/bootstrap/js/modal.js',
              './bower_components/bootstrap/js/tooltip.js',
              './bower_components/bootstrap/js/popover.js',
              './bower_components/bootstrap/js/scrollspy.js',
              './bower_components/bootstrap/js/tab.js',
              './bower_components/bootstrap/js/affix.js',
              ],
            tasks:['concat:bootstrap'],
            options:{
              livereload: true
            }
          },
      root_angular: {
        files:['./bower_components/angular/angular.js'],
        tasks:['concat:angular'],
        options:{
          livereload: true
        }
      },
      root_andrew:{
        files:['js/**/*.js'],
        tasks:['concat:root_app'],
        options:{
          livereload: true
        }
      },
      less:{
        files:['less/**/*.less'],
        tasks:['less'],
        options:{
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'concat', 'watch']);
};