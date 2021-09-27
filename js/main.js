
//Jquery
$(function () {
        //fix image size
        // var $winwidth = $(window).width();
        // var $winheight = $(window).height();
        // var $winNav = $('#navbar-example2').height();
        // $("#first , .po-bg-dark ").css({
        //         width: $winwidth,
        //         height: $winheight - $winNav

        // });
        // // console.log("width = " + $winwidth + "height = "+ $winheight );
        // $(window).on("resize", function () {
        //         var $winwidth2 = $(window).width();
        //         var $winheight2 = $(window).height();
        //         var $winNav2 = $('#navbar-example2').height();
        //         $("#first , .po-bg-dark ").css({
        //                 width: $winwidth2,
        //                 height: $winheight2 - $winNav2
        //         });
        // });

        // $('.prog1').animate({
        //         width: "50%",
        //         "aria-valuenow": "10"
        // }, 1000);

        // $(window).scroll(function () {
        //         //                 navbar2
        //         var sec = $(".about-me").offset().top;
        //         if ($(window).scrollTop() >= sec) {
        //                 $("#navbar2").slideDown(1000);
        //         }
        //         else { $("#navbar2").fadeOut(1); }

        //         //          if($(window).width() < 767)
        //         //          {
        //         //              $(".po-first .about-me .button").text("C.V");
        //         //          }
        //         if (window.matchMedia('(max-width: 767px)').matches) {
        //                 $(".po-first .about-me .button").html("C.V");
        //         }

        // });

        // start v2 
        // navbar 
        var isOpen = false;
        $(".menu-open-btn , .open-btn").click(function () {
                // alert("hello");
                isOpen = true;
                if (isOpen) {
                        // $('#navbar').removeClass();
                        $('#navbar').addClass('active');
                } else { $('#navbar').removeClass('active'); }
        });
        $(".close-navbar").click(function () {
                isOpen = false;
                if (!isOpen) {
                        $('#navbar').removeClass('active');
                }
                else { $('#navbar').addClass('active') };
        });

        $(".close-navbar-2").click(function () {
                isOpen = false;
                if (!isOpen) {
                        $('#navbar').removeClass('active');
                }
                else { $('#navbar').addClass('active') };
        });

        //navbar scroll

        $(window).scroll(function () {
        
                //                 navbar2
                var sec = $("#about").offset().top;
                if ($(window).scrollTop() >= sec) {
                        $("#navbar2").addClass("fixed-navbar fadeInDown active");
                        $("#navbar2").slideDown(1000);
                }
                else {
                        $("#navbar2").removeClass().addClass('fixed-navbar');
                }
        });
});
