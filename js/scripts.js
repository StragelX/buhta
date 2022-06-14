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
      bodyToggleNoScroll();
    });

    $(window).click(function () {
      $(".drop_down_wrap").removeClass("active");
    });

    $(".close").click(function () {
      bodyToggleNoScroll();
      closeModal();
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
    });
  });

  $(".call_thanks").click(function () {
    bodyToggleNoScroll();
    $(".modal_overlay.thanks").addClass("active");
  });
});
