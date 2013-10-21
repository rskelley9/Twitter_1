$(document).ready(function() {    
  $('form').on('submit', function(event){
    event.preventDefault();
    var handle = $('#handle').val();
    var url = "/"+handle+"";
    $('#add_yo_stuff').html("<img src='/gif/ajax-loader.gif'></img>")
    $.get(url, function(response){
      $('#add_yo_stuff').html(response)
    });
  });
});

