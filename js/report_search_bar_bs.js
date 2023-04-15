$(document).ready(function() {
    $("#search-bar").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#cards-content-bs .card-bs").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  // 按下crl+k，跳到搜尋框
  $(document).ready(function() {
    $(document).on("keydown", function(event) {
      if (event.ctrlKey && event.key === "k") {  // Ctrl+K
        event.preventDefault();
        $("#search-bar").focus().trigger("keyup");
        $(".input-group-text").animate({ width: 'hide' }, 350);
        $(".key-bs").fadeOut( 50 );
      }
    });
  });
  
  
  $(document).ready(function () {
      $("#search-btn").click(function () {
        $("#search-bar").focus().trigger("keyup");
        $(".input-group-text").animate({ width: 'hide' }, 350);
        $(".key-bs").delay( 0 ).fadeOut( 300 );
      })
    })
  
  $(document).ready(function () {
      $("#cards-content-bs").click(function () {
        $(".input-group-text").animate({ width: 'show' }, 350);
        $(".key-bs").delay( 0 ).fadeIn( 300 );
      })
    })
  $(document).ready(function () {
      $("#bs-menu-bar").click(function () {
        $(".input-group-text").animate({ width: 'show' }, 350);
        $(".key-bs").delay( 0 ).fadeIn( 300 );
      })
    })
  $(document).ready(function () {
      $("#filters").click(function () {
        $(".input-group-text").animate({ width: 'show' }, 350);
        $(".key-bs").delay( 0 ).fadeIn( 300 );
      })
    })
  $(document).ready(function () {
      $("#sort").click(function () {
        $(".input-group-text").animate({ width: 'show' }, 350);
        $(".key-bs").delay( 0 ).fadeIn( 300 );
      })
    })

  $(document).ready(function () {
    $("#search-bar").focus(function () {
      $(".input-group-text").animate({ width: 'toggle' }, 350);
        $(".key-bs").fadeOut( 300 );
      })
    })
  

