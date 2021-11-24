/*=============================================
            TODO -- BOTONES IDIOMAS
=============================================*/
$(".item_idiomaEn").click(function () {

    $(this).removeClass("bg-white")
    $(this).removeClass("text-dark")

    $(this).addClass("bg-info")
    $(this).addClass("text-white")

    $(".item_idiomaEs").addClass("bg-white")
    $(".item_idiomaEs").addClass("text-dark")
})

$(".item_idiomaEs").click(function () {

    $(this).removeClass("bg-white")
    $(this).removeClass("text-dark")

    $(this).addClass("bg-info")
    $(this).addClass("text-white")

    $(".item_idiomaEn").addClass("bg-white")
    $(".item_idiomaEn").addClass("text-dark")
})


/*=============================================
            TODO -- BOTONES MENU
=============================================*/
if (window.matchMedia("(max-width:767px)").matches) {
    $(".item_menu").click(function () {
        $(".menu").addClass("d-none d-lg-block");
        $(".menu_movil").slideToggle('fast');
    })

} else {
    $(".item_menu").click(function () {

        $(".menu").slideToggle('fast');
    })

    $(".menu ul li a").click(function (e) {

        $(".menu").slideToggle('fast');

        e.preventDefault();

        var vinculo = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(vinculo).offset().top - 60

        }, 1000, "easeInOutBack")
    })
}

/*=============================================
            TODO -- SLIDE BANNER
=============================================*/

$('.fade-slider').jdSlider({

    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 7000,
    isCursor: false,
    speed: 3000

})

$(".verMas").click(function () {

    var vinculo = $(this).attr("vinculo");

    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000, "easeInOutBack")

})

$(".banner .fade-slider").css({"margin-top": $("header").height()})


if (window.matchMedia("(max-width: 767px)").matches) {
    $(".importancia_contenido_item").removeClass("container")
}