// Global Wakaf v1 by Faturachman Dwi Putro
// https://faturputro.github.io

$(document).ready(function(){
    "use strict";

    // ============================== Draw SVG on scroll
//     var $doc = $(document),
//     $win = $(window),
//     $svg = $('svg').drawsvg(),
//     max = $doc.height() - $win.height();

//     $win.on('scroll', function() {
//     var p = $win.scrollTop() / max;
//     $svg.drawsvg('progress', p);
// });

    $(window).scroll(function() {
      drawLine( $('#route'),
                document.querySelectorAll('svg_37 , svg_38 , svg_39 , svg_40 , svg_41 , svg_42 , svg_43 , svg_44, svg_45 , svg_46 , svg_47') );
    });
    
    // init the line length
      drawLine( $('#route'),
                document.querySelectorAll('svg_37 , svg_38 , svg_39 , svg_40 , svg_41 , svg_42 , svg_43 , svg_44, svg_45 , svg_46 , svg_47') );
  
    //draw the line
    $(document).ready(function(){

      $(window).scroll(function() {
        drawLine( $('#route'),
                  document.getElementById('path') );
      });
      
      // init the line length
        drawLine( $('#route'),
                  document.getElementById('path') );
    
      //draw the line
      function drawLine(container, line){
        
        var pathLength = line.getTotalLength(),
            maxScrollTop = $(document).height() - $(window).height(),
            percentDone = $(window).scrollTop() / maxScrollTop,
            length = (percentDone * pathLength)*1;
        line.style.strokeDasharray = [ length ,pathLength].join(' ');
      }
      
    });

    $(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.branch').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});
    

  });

