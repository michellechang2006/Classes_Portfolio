

const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ';

fetch(uri)
  .then(res => res.json())
  .then(res => {
    // 將值的陣列中所有的lost_image修改成"圖片不見"
    res.values.map(arr => {
      //為何此頁面讓您最有印象？
      const image = arr.indexOf("pages_image");
      if (image !== -1) {
        arr[image] = "圖片精美";
      }
      const text = arr.indexOf("pages_text");
      if (text !== -1) {
        arr[text] = "文字內容豐富";
      }
      const link = arr.indexOf("pages_id");
      if (link !== -1) {
        arr[link] = "網站互動元素有趣";
      }
      const btn = arr.indexOf("pages_design");
      if (btn !== -1) {
        arr[btn] = "網站版面設計精美";
      }
      const others = arr.indexOf("other_problems");
      if (others !== -1) {
        arr[others] = "其他";
      }
      const none = arr.indexOf("no");
      if (none !== -1) {
        arr[none] = "無";
      }

      // 填卷者身分
      const teacher = arr.indexOf("teacher");
      if (teacher !== -1) {
        arr[teacher] = "審查委員/老師";
      }
      const student = arr.indexOf("student");
      if (student !== -1) {
        arr[student] = "學生";
      }
      const visior = arr.indexOf("visior");
      if (visior !== -1) {
        arr[visior] = "訪客";
      }

      return arr;
    });
    let data = res.values;

    // 刪除第一個陣列
    data.shift();

    // 排序
    const sortData = () => {
      if (document.getElementById('newest').checked) {
        data.sort((a, b) => new Date(b[0]) - new Date(a[0])); // 最新排在前面
      } else {
        data.sort((a, b) => new Date(a[0]) - new Date(b[0])); // 最舊排在前面
      }
      renderData();
    }


    // 渲染資料
    const renderData = () => {
      document.querySelector('.cards-content-bs').innerHTML = '';
      data.forEach(d => {
        // 課程簡介
        let form_search = ` 
        <div class="card-bs shadow-lg p-1 my-5 rounded-5 ${d[2]} ${d[3]} ${d[1]} ">
        <div class="row d-flex  align-items-center" id="card-bs">
          <div class="col-7 mx-5">
            <h2>描述為何此頁面讓您最有印象？</h2>
            <p class="my-3" style="font-family: 'Noto Sans TC', sans-serif;">
            <p>
            ${d[10]}
            </p>
            </p>
          </div>
          <div class="col-3 mt-4 p-0 text-center">
            <h4>評分 ⭐</h4>
            <div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example"
              aria-valuenow="${d[5]}" aria-valuemin="0" aria-valuemax="5">
              <div class="progress-bar text-danger overflow-visible" style="width: ${d[5]*20}%">網站整體圖片/插圖設計</div>
            </div>
            <div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example"
              aria-valuenow="${d[6]}" aria-valuemin="0" aria-valuemax="5">
              <div class="progress-bar text-danger overflow-visibletext-danger overflow-visible"
                style="width:${d[6]*20}%">網站整體文字內容</div>
            </div>
            <div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example"
              aria-valuenow="${d[7]}" aria-valuemin="0" aria-valuemax="5">
              <div class="progress-bar text-danger overflow-visible" style="width: ${d[7]*20}%">網站互動元素設計</div>
            </div>
            <div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example"
              aria-valuenow="${d[8]}" aria-valuemin="0" aria-valuemax="5">
              <div class="progress-bar text-danger overflow-visible" style="width: ${d[8]*20}%">網站版面設計精美</div>
            </div>
            <div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example"
              aria-valuenow="${d[9]}" aria-valuemin="0" aria-valuemax="5">
              <div class="progress-bar text-danger overflow-visible" style="width: ${d[9]*20}%">網站使用者體驗</div>
            </div>
            <div class="container-fluid text-start">
              <p class="d-inline">⭐</p>
              <p class="float-end d-inline">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div class="card-tag-bs mx-5 row col-7 p-0">
            <p class="text-warning col-4"
              style="font-weight: 500; font-size: 1.2rem; font-family: 'Noto Sans TC', sans-serif;">
              #${d[2]}</p>
            <p class="text-danger col-4" style="font-weight: 500; font-size: 1.2rem;">#${d[3]}</p>
            <p class="text-success col-4" style="font-weight: 500; font-size: 1.2rem;">#${d[1]}</p>
            <div class="col-12 bg-body-secondary rounded-5" style="height: .12rem;">
            </div>
            <p class="text-gray col-4 my-3"
              style="font-weight: 500; font-size: .9rem; font-family: 'Noto Sans TC', sans-serif;">
              日期：${d[0]}</p>
          </div>
        </div>
      `;
        document.querySelector('.cards-content-bs').insertAdjacentHTML('beforeend', form_search);
      });
    }

    // 初始化
    const init = () => {
      renderData();
      document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', sortData);
      });
      console.clear();
    }

    init();
  })
