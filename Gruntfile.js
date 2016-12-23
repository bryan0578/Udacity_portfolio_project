/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {
// Initialize grunt configuration and set image sizes for responsive images
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },{
            width: 750,
            suffix: '_meduim',
            quality: 50
          },{
            width: 500,
            suffix: '_small',
            quality: 50
          }]
        },
//clear out images folder if it exists or create images folder for new responsive sized images
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'development/src_images/',
          dest: 'development/images/'
        }]
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path 
          {expand: true, flatten: true, src: 'development/images/*', dest: 'production/images/', filter: 'isFile'},
        ],
      },
    },
  });


//load tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //run task
  grunt.registerTask('default', ['responsive_images', 'copy']);

};