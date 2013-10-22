$(document).ready(function() {    
  $('form').on('submit', function(event){
    event.preventDefault();
    var handle = $('#handle').val();
    var radio = $('#see_followers').val();
    var url = "/"+handle+"";

   var thing = $('#see_followers:checked').val()

    console.log(thing)

    $('#add_yo_stuff').html("<img src='/gif/ajax-loader.gif'></img>")
    
    if ($('#see_followers:checked').val() == "false") 

    {
      var follower_url = "/followers/"+handle+"";
      $.get(follower_url, function(response) {
        $('#add_yo_stuff').html(response);
      });
    } 
    else
    {
      $.get(url, function(response){
        $('#add_yo_stuff').html(response);

      });

    }

  });

});

