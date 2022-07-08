$(document).ready(function () {
  function closeModal() {
    $(".modal_overlay").removeClass("active");
    bodyToggleNoScroll();
  }

  function bodyToggleNoScroll() {
    $("body").toggleClass("no_scroll");
  }

  $(document).ready(function () {
    $(".modal_overlay").click(function () {
      closeModal();
    });

    $(window).click(function () {
      $(".drop_down_wrap").removeClass("active");
    });

    $(".close").click(function () {
      closeModal();
      bodyToggleNoScroll();
    });

    $(".show_altankas_map").click(function () {
      bodyToggleNoScroll();
      $(".modal_overlay.map").addClass("active");
    });

    $(".drop_down_wrap").click(function (event) {
      event.stopPropagation();
      $(this).addClass("active");
    });

    $(".drop_down_wrap .drop div").click(function () {
      $(this).siblings().removeClass("selected");
      $(this).addClass("selected");
      $(".drop_down_wrap > .selcted").html($(this).html());
      let type = $(this).attr("data-type");

      $(".altanka").each(function () {
        $(this).removeClass("disabled");

        if (type != "all") {
          if ($(this).attr("data-type") != type) {
            $(this).addClass("disabled");
          }
        }
      });
    });

    $(".altanka").click(function () {
      $(this).toggleClass("active");
      $(this).siblings().removeClass("active");
    });

    $(".call_thanks").click(function () {
      bodyToggleNoScroll();
      $(".modal_overlay.thanks").addClass("active");
    });
  });
});
