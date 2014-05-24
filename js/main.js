
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

 $('span.logreg.log').one('click', function () {

                // insert html
                $('div.registration-part').append('<p>Login</p>');
            });
  

  var sendButton = {
    init: function() {
      this.send();
    },

    send: function() {
      $(".talkButton").on('mouseenter', function(){
        $(this).addClass("sent");
        $('.talkButton p').remove();
        $(this).prepend('<i class="fa fa-paper-plane fa-2x"></i>');
       });

      $(".talkButton").on('mouseleave',function(){
        $(".talkButton").removeClass("sent");
        $('.talkButton i').remove();
        $('.talkButton').prepend('<p>Talk About It</p>');
      });
    }
  };

  var stickyHeader = {
    init:function() {
      this.stick();
    },

    stick: function() {
      $(window).scroll(function(){
      var top =  $(this).scrollTop();
      var height = $(this).height() - 70;
      height = (height / 100) * 100;
      if(top > height) {
        $(".navWrapper").addClass("headerStick");
      } else {
        $(".navWrapper").removeClass("headerStick");
      }
      });
    }
  };

  var likedButton = {
    init:function() {
      this.liked();
    },

    liked: function() {

    $(".likeButton").on('mouseenter', function(){
        $(this).animate({
          height: 150,
          width: 150
        }, 1000 );
       });

      $(".likeButton").on('mouseleave',function(){
        $(this).animate({
          height: 75,
          width: 75
        }, 1000 );
      });
    }
  };
  (function() {
    likedButton.init();
    sendButton.init();
    stickyHeader.init();

  }()); 

}); 
