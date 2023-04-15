$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        var formData = new FormData(this); // 创建一个FormData对象
        var inputFile = $('#image')[0].files[0]; // 获取上传的文件
        var imgurClientID = '6be4b639360acf0'; // 在imgur网站注册API并获取你的客户端ID
        var imgurAPIUrl = 'https://api.imgur.com/3/image'; // imgur API的URL
  
        // 创建一个XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        xhr.open('POST', imgurAPIUrl, true);
        xhr.setRequestHeader('Authorization', 'Client-ID ' + imgurClientID);
  
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var imgurResponse = JSON.parse(this.responseText);
                var imgUrl = imgurResponse.data.link; // 获取上传的图像的URL
                
  
                // 将图像URL添加到formData对象
                formData.append('image', imgUrl);
  
                $('#exampleModal').modal('show'); 
  
  
  
                // 向Google Apps Script网址发送表单数据和图像URL
                $.ajax({
                    url: 'https://script.google.com/macros/s/AKfycbxL1izgWZ0J__Z2LeP3R1dpfPRpUbZIZB00kaQ8M0fYis1XfrFeIrkA36Nde96ZAXyq/exec',
                    type: 'POST',
                    data: formData,
                    processData: false, // 不处理数据
                    contentType: false, // 不设置内容类型
                    success: function(data) {
                        // 提交成功后的处理
                        console.log('提交成功');
                        alert("提交成功！我會儘快修復 💪🏻");
                        window.location.href = "reported.html"; 
                    },
                    error: function() {
                        // 提交失败后的处理
                        console.log('提交失敗');
                        alert("提交失敗！請點選右下角的按鈕 🙏");
                    }
                });
            }
        };
  
        // 发送FormData对象和图像文件
        xhr.send(formData);
    });
  });
  