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
      if ($(".drop_down_wrap").hasClass("active")) {
        $(".drop_down_wrap").removeClass("active");
      }
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
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
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
      $(".size_link").removeClass("disabled");
    });

    $(".call_thanks").click(function () {
      bodyToggleNoScroll();
      $(".modal_overlay.thanks").addClass("active");
    });

    $.datepicker.regional["ua"] = {
      closeText: "Закрити",
      prevText: "",
      nextText: "",
      currentText: "сьогодні",
      monthNames: [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
      ],
      monthNamesShort: [
        "Січ",
        "Лют",
        "Бер",
        "Квіт",
        "Тра",
        "Чер",
        "Лип",
        "Сер",
        "Вер",
        "Жовт",
        "Лист",
        "Груд",
      ],
      dayNames: [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Среда",
        "Четвер",
        "П'ятница",
        "Субота",
      ],
      dayNamesShort: ["нед", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Не", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Не",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "",
    };
    $.datepicker.setDefaults($.datepicker.regional["ua"]);

    var date = new Date();

    date.setDate(date.getDate());

    $("#datepicker").datepicker({
      minDate: date,

      onSelect: function () {
        $("#selected_date").html(
          moment($(this).datepicker("getDate")).format("l").replaceAll("/", ".")
        );
      },
    });
  });
});
