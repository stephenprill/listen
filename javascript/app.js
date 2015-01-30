"use strict";

// $('.container').on('click','.fa-play', function() {
// $('.fa').removeClass('fa-pause').addClass('fa-play');
// $(this).removeClass('fa-play').addClass('fa-pause');
// })
//
// $('.container').on('click', '.fa-pause', function(){
// $(this).removeClass('fa-pause').addClass('fa-play');
// })


$(document).ready(function () {

  $.getJSON('data.json', function(data) {
    var $playerTemplate = $('#trackTemplate').html();

    data.tracks.forEach(function (track) {
      var newHTML = Mustache.to_html($playerTemplate, track);

      $('#tracksList').append(newHTML);
    });

    $('.control').on('click', function () {
      $(this).find('i').toggleClass('hidden')
    });


  });

});
