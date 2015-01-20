"use strict";

$('.container').on('click','.fa-play', function() {
$('.fa').removeClass('fa-pause').addClass('fa-play');
$(this).removeClass('fa-play').addClass('fa-pause');
})

$('.container').on('click', '.fa-pause', function(){
$(this).removeClass('fa-pause').addClass('fa-play');
})


$(document).ready(function () {

  $.getJSON('posts.json', function(data) {
    var $postsTemplate = $('#postsTemplate').html();

    var newHTML = Mustache.to_html($postsTemplate, data);

    $('.posts').html(newHTML);
  });

});
