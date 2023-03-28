
  $(document).ready(function() {
    $(".projects").click(function() {
      $(".projects-content-md").slideToggle(300);
      $(".all-classes-md-content").slideUp(300);
    })
  })
  $(document).ready(function() {
    $("main").click(function() {
      $(".projects-content-md").slideUp(300);
    })
  })
  $(document).ready(function() {
    $(".all-classes-md").click(function() {
      $(".all-classes-md-content").slideToggle(300);
    })
  })
  $(document).ready(function() {
    $("main").click(function() {
      $(".all-classes-md-content").slideUp(300);
      $("..projects-content-md").slideUp(300);
    })
  })
  