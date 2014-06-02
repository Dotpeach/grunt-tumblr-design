module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Takes your scss files and compiles them to css with COMPASS
        compass: {
          dist: {
            options: {
              config: 'config.rb',  
              cssDir: 'src/css',
              sassDir: 'src/css/scss',
            }
          }
        },

        // Assembles your template content with html layout
        assemble: {
          options: {
            layoutdir: 'src/layouts',
            flatten: true
          },
          pages: {
            src: ['src/contents/*.hbs'],
            dest: 'dist/'
          }
        },

        // CSS in <head>
         inline: {
          dist: {
            options:{
                tag: 'inline'
            },
            src: [ 'dist/*.html' ]
          }
        },

        // Watches for changes to css or tumblr templates then runs grunt tasks
        watch: {
          files: ['src/css/scss/*','src/contents/*','src/layouts/*'],
          tasks: ['default']
        }


    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-inline');
  

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['compass', 'assemble', 'inline']);


};
