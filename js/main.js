$('document').ready(function(){

    $my_top_panel = $('.toppanel');
    $my_right_panel = $('.rightpanel');
    $my_bottom_panel = $('.bottompanel');
    $my_left_panel = $('.leftpanel');

    $img = $('.imgs');
    $img_container = $(".imgcontainer");

    $git_link = $(".gitlink");
    $inner_link = $(".innerlink");

    $window = $(window);

    $window.resize(function(e) {
      if (window.innerWidth < 904) {

        $my_left_panel.css({
            "width": "100%",
            "overflow": "auto",
            "float": "none",
            "height": "980px"
        });

        $my_top_panel.css({
            "width": "100%",
            "padding-left": "80px"
        });

        $my_right_panel.css({
            "width": "100%",
            "height": "1400px"
        });

        $my_bottom_panel.css({
            "width": "100%"
        });

        $img_container.css({
            "top": "30px",
            "left": "30px",
            "border-radius": "90% 90% 90% 90%"
        });

        $img.css({
            "max-width": "150px",
            "margin": "-10px -50px 0px -40px"
        });

        $git_link.css({
            "width": "50%"
        });

      } else {

        $my_left_panel.css({
            "width": "255px",
            "overflow": "hidden",
            "float": "left",
            "height": "1156px"
        });

        $my_top_panel.css({ 
            "width": "855px",
            "padding-left": "0px"
        });

        $my_right_panel.css({
            "width": "595px",
            "height": "1160px"
        });

        $my_bottom_panel.css({
            "width": "865px"
        });

        $img_container.css({
            "top": "55px",
            "left": "70px",
            "border-radius": "50% 50% 50% 50%"
        });

        $img.css({
          "max-width": "200px",
          "margin": "-10px 0px 0px -34px"
        });

        $git_link.css({
            "width": "28%"
        });

      }

    });

});