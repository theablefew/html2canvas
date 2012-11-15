module.exports = function(grunt) {

  var src_files = [ 'src/LICENSE'
                   ,'src/html2canvas-pre.txt'
                   ,'src/Core.js'
                   ,'src/Generate.js'
                   ,'src/Parse.js'
                   ,'src/Preload.js'
                   ,'src/Queue.js'
                   ,'src/Renderer.js'
                   ,'src/Util.js'
                   ,'Canvas.js'
                   ,'html2canvas-post.txt'
                  ];

  grunt.initConfig({
    concat: {
      dist: {
        src: src_files,
        dest: 'build/html2canvas.js'
      }
    }
  });
}
