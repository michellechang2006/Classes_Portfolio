document.body.oncopy = function () {
    setTimeout( function () {
        // ToDo: append source hyperlink
    }, 100)
  }

  document.addEventListener('copy', function (evt) {
      let text = document.getSelection().toString();
      console.log(text);
  });

  document.addEventListener('copy', function (evt) {
      let text = document.getSelection().toString();
      if (text) {
          text = text + "\n\n" 
          + "=========================================\n"
          + "來源： Michelle Chang from www.mlearning.url.tw"
      }  
      let clipdata = evt.clipboardData || window.clipboardData;        
      clipdata.setData("text",text);
      evt.preventDefault();
  });