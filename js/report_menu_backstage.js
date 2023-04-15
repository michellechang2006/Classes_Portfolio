$(document).ready(function () {
    $("#bs-menu-icon-md").click(function () {
      $("#bs-menu-content-md").animate({ width: 'toggle' }, 000);
      $("#bs-menu-navbar-md").toggleClass("col-9");
      $("#bs-menu-navbar-md").toggleClass("col-11");
      $("#bs-empty-content-md").animate({ width: 'toggle' }, 000);
      $("#bs-empty-navbar-md").toggleClass("col-9");
      $("#bs-empty-navbar-md").toggleClass("col-11");
    })
  })
$(document).ready(function () {
    $(".opacity-0").click(function () {
      $("#bs-menu-content-md").hide(0);
      $("#bs-menu-navbar-md").removeClass("col-9");
      $("#bs-menu-navbar-md").addClass("col-11");
      $("#bs-empty-content-md").hide(0);
      $("#bs-empty-navbar-md").removeClass("col-9");
      $("#bs-empty-navbar-md").addClass("col-11");
    })
  })



  $(document).ready(function () {
    $("#nav-report").click(function () {
      $(".report-content").slideToggle(300);
      $(".feedback-content").slideUp(300);
    })
    $("#nav-feedback").click(function () {
      $(".feedback-content").slideToggle(300);
      $(".report-content").slideUp(300);
    })
    $("#nav-111").click(function () {
      $("#years-forms-111").slideToggle(300);
      $("#years-forms-112").slideUp(300);
      $("#years-forms-113").slideUp(300);
    })
  })
  $("#nav-112").click(function () {
    $("#years-forms-112").slideToggle(300);
    $("#years-forms-111").slideUp(300);
    $("#years-forms-113").slideUp(300);
  })
  $("#nav-113").click(function () {
    $("#years-forms-113").slideToggle(300);
    $("#years-forms-111").slideUp(300);
    $("#years-forms-112").slideUp(300);
  })