$(document).ready(function() {
    // 監聽搜尋框的變化
    $('#search-bar-pages').on('input', function() {
      var searchText = $(this).val().toLowerCase();
      // 顯示或隱藏相符的項目
      $('.pages-items li').each(function() {
        var pageText = $(this).text().toLowerCase();
        if (pageText.indexOf(searchText) !== -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
  $(document).ready(function () {
        $("#search-btn-page").click(function () {
          $("#search-bar-pages").focus().trigger("keyup");
        })
      })