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

  var trackPlaying = false;

  $.getJSON('data.json', function(data) {
    var $playerTemplate = $('#trackTemplate').html();

    data.tracks.forEach(function (track) {
      var newHTML = Mustache.to_html($playerTemplate, track);

      $('#tracksList').append(newHTML);
    });

    $('.control').on('click', function () {
      $.each($.find('audio'), function (index, track) {
        track.pause();
      });

      $('i.fa-play').removeClass("hidden");
      $('i.fa-pause').addClass("hidden");

      var track = $(this).find('audio')[0];

      if(trackPlaying) {
        track.pause();
        trackPlaying = false;
      } else {
        track.play();
        $(this).find('i.fa-play').addClass('hidden');
        $(this).find('i.fa-pause').removeClass("hidden");
        trackPlaying = true;
      }
    });


  });

});
