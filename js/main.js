
$(document).ready(function() {
  
function fullscreen() {
    $('a').click(function() {
        if(!$(this).hasClass('noeffect')) {
            window.location = $(this).attr('href');
            return false;
        }
    });
}
 
fullscreen();
  

  var sendButton = {
    init: function() {
      this.send();
    },

    send: function() {
      $(".talkButton").mouseenter(function(){
        $(this).addClass("sent");
        $('.talkButton p').remove();
        $(this).prepend('<i class="fa fa-paper-plane fa-2x"></i>');
      });
      $(".talkButton").mouseleave(function(){
        $(this).removeClass("sent");
        $('.talkButton i').remove();
        $(this).prepend('<p>Talk About It</p>');
      });
    }
  };

  (function() {
    sendButton.init();

  }()); 

}); 
