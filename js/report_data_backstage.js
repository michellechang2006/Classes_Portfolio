

const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1qOWN8Nt6HKlRI2tWFsxStUZzmLCSn79plpQQVqJHknI/values/sheet1?alt=json&key=AIzaSyB07NXroQXDNWW8MSDPy9Bo7UPX4_MAg5k';

fetch(uri)
  .then(res => res.json())
  .then(res => {
    // 將值的陣列中所有的lost_image修改成"圖片不見"
    res.values.map(arr => {
      //哪一種問題？
      const image = arr.indexOf("lost_image");
      if (image !== -1) {
        arr[image] = "圖片不見";
      }
      const text = arr.indexOf("lost_text");
      if (text !== -1) {
        arr[text] = "文字消失";
      }
      const link = arr.indexOf("lost_link");
      if (link !== -1) {
        arr[link] = "連結失效";
      }
      const btn = arr.indexOf("lost_button");
      if (btn !== -1) {
        arr[btn] = "按鈕失效";
      }
      const others = arr.indexOf("other_problems");
      if (others !== -1) {
        arr[others] = "其他";
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
            <h2>問題描述</h2>
            <p class="my-3" style="font-family: 'Noto Sans TC', sans-serif;">
            ${d[4]}
            </p>
          </div>
          <div class="col-1 mt-5 p-0">
          <a href="${d[5]}"><img class="rounded-5 shadow img-card-bs d-flex align-self-center"
          src="${d[5]}"></a>
          </div>
          <div class="card-tag-bs mx-5 row col-7 p-0">
            <p class="text-warning col-4"
              style="font-weight: 500; font-size: 1.2rem; font-family: 'Noto Sans TC', sans-serif;">
              #${d[2]}</p>
            <p class="text-danger col-4" style="font-weight: 500; font-size: 1.2rem;">#${d[3]}</p>
            <p class="text-success col-4" style="font-weight: 500; font-size: 1.2rem;">#${d[1]}</p>
            <div class="col-12 bg-body-secondary rounded-5" style="height: .12rem;" >
            </div>
            <p class="text-gray col-4 my-3"
              style="font-weight: 500; font-size: .9rem; font-family: 'Noto Sans TC', sans-serif;">
              日期：${d[0]}</p>
        

          </div>
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
