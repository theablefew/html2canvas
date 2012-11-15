module.exports = function(grunt) {

  var src_files = [ 
                   '<banner:meta.banner>'
                   ,'src/Core.js'
                   ,'src/Generate.js'
                   ,'src/Parse.js'
                   ,'src/Preload.js'
                   ,'src/Queue.js'
                   ,'src/Renderer.js'
                   ,'src/Util.js'
                   ,'renderers/Canvas.js'
                  ];

  grunt.initConfig({
    pkg: '<json:package.json>',
    // Meta
    meta: {
      banner: '/*\n\t<%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> ' + 
              '\n\t<%= pkg.author %>' +
              '\n*/'
    },
    // Build
    concat: {
      dist: {
        src: src_files,
        dest: 'build/html2canvas.js'
      }
    },
    // Min
    min: {
      dist: {
        src: src_files,
        dest: 'build/html2canvas.min.js',
        seperator: ';'
      }
    },
    // Clean
    clean: {
      folder: "build/"
    }
  });


  grunt.loadNpmTasks('grunt-clean');
  
}