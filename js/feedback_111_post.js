

$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        var formData = $('#myForm').serialize(); // 将表单数据序列化
        $('#exampleModal').modal('show'); 
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbwXap9c-DcF_HRSe0Vj47jfOKtfyU9YQKywbkhu29uxzTTRJio5c0acfNDfeOr4INhf/exec',
            type: 'POST',
            data: formData,
            success: function(data) {
                // 提交成功后的处理
                console.log('提交成功');
                alert("提交成功！感謝您的回饋 🙏");
                window.location.href = "after_feedback.html"; // 跳转到test.html
            },
            error: function() {
                // 提交失败后的处理
                console.log('提交失敗');
                alert("提交失敗！請點選右下角的按鈕 🙏");
            }
        });
});
});