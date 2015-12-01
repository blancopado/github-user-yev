$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var access_token = '08ba82997ae8f267b32ab0e10bcec12c8cca3e7f'
    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function() {
      $('.container').prepend("User not found")
    }).always(function() {
      $('input.username').val('');
      });
  });
});