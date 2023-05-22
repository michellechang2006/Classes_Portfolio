
// 為何此頁面讓您最有印象？

fetch('https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ')
  .then(response => response.json())
  .then(data => {
    const rows = data.values;
    let pages_imageCount = 0;
    let pages_textCount = 0;
    let pages_linkCount = 0;
    let pages_buttonCount = 0;
    let pages_problemsCount = 0;
    let noCount = 0;


    rows.forEach(row => {
      if (row[2] === "which_pages") {
        // skip the header row
        return;
      }

      const problems = row[3].split(", ");

      problems.forEach(problem => {
        switch (problem) {
          case "pages_image":
            pages_imageCount++;
            break;
          case "pages_text":
            pages_textCount++;
            break;
          case "pages_id":
            pages_linkCount++;
            break;
          case "pages_design":
            pages_buttonCount++;
            break;
          case "pages_problems":
            pages_problemsCount++;
            break;
          case "no":
            noCount++;
            break;

          default:
            // do nothing
            break;
        }
      });
    });

    // 總數
    const totalCount = pages_imageCount + pages_textCount + pages_linkCount + pages_buttonCount + noCount + pages_problemsCount;
    // 計算百分比
    const pages_image = pages_imageCount / totalCount / 0.01
    const pages_text = pages_textCount / totalCount / 0.01
    const pages_link = pages_linkCount / totalCount / 0.01
    const pages_btn = pages_buttonCount / totalCount / 0.01
    const pages_problems =  pages_problemsCount / totalCount / 0.01
    const no =  noCount / totalCount / 0.01
   


    // 嵌入html
    const image = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${pages_image}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${pages_image}%">圖片精美</div>
    `;
    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', image);

    const text = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${pages_text}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${pages_text}%">文字內容豐富</div>
    `;
    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', text);

    const link = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${pages_link}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${pages_link}%">網站互動元素有趣</div>
    `;
    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', link);

    const button = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${pages_btn}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${pages_btn}%">網站版面設計精美</div>
    `;
    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', button);

    const others = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${pages_problems}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${pages_problems}%">其他</div>
    `;

    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', others);

    const none = `<div class="progress shadow-sm my-3" role="progressbar" aria-label="Basic example" aria-valuenow=" ${no}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-danger" style="width:${no}%">無</div>
    `;

    document.querySelector('#kinds_of_q').insertAdjacentHTML('beforeend', none);
  })
  .catch(error => console.error(error));





//   提交次數
// 從URL獲取JSON數據
let numRows;

fetch('https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ')
  .then(response => response.json())
  .then(data => {
    // 獲取值的數組
    const values = data.values;
    // 計算行數，減去第一行
    numRows = values.length - 1;
    console.log(`這個JSON檔案有 ${numRows} 列`);

    const jsonData = ` <br>
      <i>${numRows}次</i>`;
    // 將數據設置為標題元素的內容
    document.querySelector('.amount').insertAdjacentHTML('beforeend', jsonData);

    // 在這裡進行第二個fetch並使用numRows
    //   網站各方面評價 ⭐
   
  const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ';
      
  fetch(uri)
    .then(res => res.json())
    .then(res => {
      const data = res.values;
      console.log(data);
  
      // 刪除第一個陣列
      data.shift();
      
  
      Array.prototype.forEach.call(data.slice(0,1), d => {
        // 計算 web_image_design 欄位的加總
        let web_image_designSum = 0;
        for (let i = 0; i < data.length; i++) {
          web_image_designSum += parseInt(data[i][5]);
        }
        console.log(web_image_designSum);
      
        const web_image_design = web_image_designSum /(numRows*5);
      
        console.log(web_image_design)
      
        let image = `<tr class="pb-4">
                      <th scope="row" style="font-size:.5rem;"> 圖片/插圖設計 </th>
                      <td class="shadow rounded-end-5" style="--size:${web_image_design}; --color:#E7725C;"></td>
                    </tr>`;
              
        document.querySelector('#racing-bs').insertAdjacentHTML('beforeend', image);

        // 計算 web_content 欄位的加總
        let web_contentSum = 0;
        for (let i = 0; i < data.length; i++) {
          web_contentSum += parseInt(data[i][6]);
        }
        console.log(web_contentSum);
      
        const web_content = web_contentSum /(numRows*5);
      
        console.log(web_content)
      
        let content = `<tr class="pb-4">
                      <th scope="row" style="font-size:.5rem;"> 文字內容 </th>
                      <td class="shadow rounded-end-5" style="--size:${web_content}; --color:#F6B388;"></td>
                    </tr>`;
              
        document.querySelector('#racing-bs').insertAdjacentHTML('beforeend', content);

        // 計算 web_interactive_desgin 欄位的加總
        let web_interactive_desginSum = 0;
        for (let i = 0; i < data.length; i++) {
          web_interactive_desginSum += parseInt(data[i][7]);
        }
        console.log( web_interactive_desginSum);
      
        const web_interactive_desgin = web_interactive_desginSum /(numRows*5);
      
        console.log(web_interactive_desgin)
      
        let interactive_desgin = `<tr class="pb-4">
                      <th scope="row" style="font-size:.5rem;"> 互動元素設計 </th>
                      <td class="shadow rounded-end-5" style="--size:${web_interactive_desgin}; --color:#E7725C;"></td>
                    </tr>`;
              
        document.querySelector('#racing-bs').insertAdjacentHTML('beforeend', interactive_desgin);

        // 計算 web_ui_desgin 欄位的加總
        let web_ui_desginSum = 0;
        for (let i = 0; i < data.length; i++) {
          web_ui_desginSum += parseInt(data[i][8]);
        }
        console.log(web_ui_desginSum);
      
        const web_ui_desgin = web_ui_desginSum /(numRows*5);
      
        console.log(web_ui_desgin)
      
        let ui_desgin = `<tr class="pb-4">
                      <th scope="row" style="font-size:.5rem;"> 版面設計精美 </th>
                      <td class="shadow rounded-end-5" style="--size:${web_ui_desgin}; --color:#F6B388;"></td>
                    </tr>`;
              
        document.querySelector('#racing-bs').insertAdjacentHTML('beforeend', ui_desgin);

        // 計算 web_ux_desgin 欄位的加總
        let web_ux_desginSum = 0;
        for (let i = 0; i < data.length; i++) {
          web_ux_desginSum += parseInt(data[i][9]);
        }
        console.log(web_ux_desginSum);
      
        const web_ux_desgin = web_ui_desginSum /(numRows*5);
      
        console.log(web_ux_desgin)
      
        let ux_desgin = `<tr class="pb-4">
                      <th scope="row" style="font-size:.5rem;"> 使用者體驗 </th>
                      <td class="shadow rounded-end-5" style="--size:${web_ux_desgin}; --color:#E7725C;"></td>
                    </tr>`;
              
        document.querySelector('#racing-bs').insertAdjacentHTML('beforeend', ux_desgin);
      })
      
    })
  })
  .catch(error => console.error(error));








// 填卷者 身分
fetch('https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ')
  .then(response => response.json())
  .then(data => {
    const rows = data.values;
    let teacherCount = 0;
    let studentCount = 0;
    let visiorCount = 0;

    rows.forEach(row => {
      if (row[2] === "identity") {
        // skip the header row
        return;
      }

      const identity = row[1].split(", ");

      identity.forEach(identity => {
        switch (identity) {
          case "teacher":
            teacherCount++;
            break;
          case "student":
            studentCount++;
            break;
          case "visior":
            visiorCount++;
            break;
          default:
            // do nothing
            break;
        }
      });
    });

    const totalCount = teacherCount + studentCount + visiorCount;
    const teacher = teacherCount / totalCount / 0.01
    const student = studentCount / totalCount / 0.01
    const visior = visiorCount / totalCount / 0.01



    // 嵌入html
    const t = `<div class="progress my-4 shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="${teacher}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-secondary overflow-visible text-danger" style="width: ${teacher}%">審查委員/老師</div>`;
    document.querySelector('#kinds_of_i').insertAdjacentHTML('beforeend', t);

    const s = `<div class="progress my-4 shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="${teacher}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-secondary overflow-visible text-danger" style="width: ${student}%">學生</div>`;
    document.querySelector('#kinds_of_i').insertAdjacentHTML('beforeend', s);

    const v = `<div class="progress my-4 shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="${visior}"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-secondary overflow-visible text-danger" style="width: ${visior}%">訪客</div>`;
    document.querySelector('#kinds_of_i').insertAdjacentHTML('beforeend', v);
  })
  .catch(error => console.error(error));


//   近五天的表單提交次數
fetch('https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ')
.then(response => response.json())
.then(data => {
  // 取得表格資料
  const rows = data.values;

  // 取得近五天的日期
  const today = new Date();
  const fiveDaysAgo = new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000);
  const dateFilter = row => {
    const date = new Date(row[0]);
    return date >= fiveDaysAgo && date <= today;
  };

  // 使用日期篩選器取得近五天的資料列
  const recentRows = rows.filter(dateFilter);

  // 計算近五天各天的資料列數
  const countByDate = recentRows.reduce((acc, row) => {
    const date = row[0];
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date]++;
    return acc;
  }, {});



  // 將各天的列數嵌入到h1標籤中
  const h1 = document.querySelector('h1');
  for (const [date, count] of Object.entries(countByDate)) {
    const v = `<th scope="col">${date}</th>`;
    document.getElementById('5days_date').insertAdjacentHTML('beforeend', v);
  }

  // 加總近五天所有的次數
  const totalCount = Object.values(countByDate).reduce((acc, count) => acc + count, 0);


  
// 將每天的次數相除近五天所有的次數後，在嵌入到h3標籤中
const percentageByDate = Object.entries(countByDate).map(([date, count], index, arr) => {
const percentage = count / totalCount;
const previousCount = arr[index-1] ? arr[index-1][1] : 0;
const previousPercentage = previousCount / totalCount;
const nextCount = arr[index+1] ? arr[index+1][1] : 0;
const nextPercentage = nextCount / totalCount;

console.log(totalCount)

// 使用计数器变量来追踪当前是奇数行还是偶数行
const isOddRow = index % 2 !== 0;
const color = isOddRow ? '#F6B388' : '#E7725C';

return ` <tr>
<th scope="row" style="font-family: 'Noto Sans TC', sans-serif;" >${date}</th>
<td style="--color:${color}; --start:${percentage}; --size:${nextPercentage};"><span class="data">${percentage}</span></td>
</tr>`;
}).join('');
document.getElementById('5days').insertAdjacentHTML('beforeend', percentageByDate);


})
.catch(error => console.error(error));


  // const fiveDate = ` <th scope="col">${date}</th>`
  // const fivedates = document.getElementById('5days_date');
  // fivedates.insertAdjacentHTML('beforeend', fiveDate);
/* <h3>${date}: ${percentage} 前一天的列數 ${previousPercentage} 隔一天的列數 ${nextPercentage}</h3> */




// 哪個頁面最有印象？
fetch('https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ')
  .then(response => response.json())
  .then(data => {
    const rows = data.values;
    let year_111 = 0;
    let thoughts = 0;
    let feedback = 0;

    //111 學年度 課程 項目

    let threeD = 0;
    let english = 0;
    let read = 0;
    let math_basic = 0;
    let animation = 0;
    let web = 0;
    let gc = 0;
    let video = 0;
    let text = 0;
    let activity = 0;



    rows.forEach(row => {
      if (row[2] === "which_pages") {
        // skip the header row
        return;
      }

      const problems = row[2].split(", ");

      problems.forEach(problem => {
        switch (problem) {

          case "111 學年度":
            year_111++;
            break;

          case "心得&回顧":
            thoughts++;
            break;


          case "問卷 回饋":
            feedback++;
            break;


          //111 學年度 課程 項目

          case "3D 軟體 基礎課 (111 學年度)":
            threeD++;
            break;

          case "情境式 英語課 (111 學年度)":
            english++;
            break;

          case "閱讀理解 素養課 (111 學年度)":
            read++;
            break;

          case "基礎數學課 (111 學年度)":
            math_basic++;
            break;

          case "電腦動畫 設計基礎課 (111 學年度)":
            animation++;
            break;

          case "網站設計 基礎課 (111 學年度)":
            web++;
            break;

          case "電腦繪圖設計 基礎課 (111 學年度)":
            gc++;
            break;

          case "影像處理 編輯基礎課 (111 學年度)":
            video++;
            break;

          case "文字造型 設計基礎課":
            text++;
            break;

          case "體驗學習課 (111 學年度)":
            activity++;
            break;

          default:
            // do nothing
            break;
        }
      });
    });

    // 資料排查

    // console.log(home )
    // console.log(year_111 )
    //  console.log(thoughts) 
    //  console.log(math) 
    //  console.log(feedback) 
    //  console.log(report) 
    // console.log(threeD) 
    // console.log (english) 
    // console.log(read) 
    //  console.log(math_basic) 
    // console.log(animation) 
    //  console.log(web) 
    //  console.log(gc) 
    //  console.log(video) 
    //  console.log(text) 
    //  console.log(activity)
 
// 計算
    const totalCount = year_111 + thoughts  + feedback  + threeD + english + read + math_basic + animation + web + gc + video + text + activity;
    const Year_111_count = year_111 / totalCount
    const Thoughts_count = thoughts / totalCount
    const Feedback_count = feedback / totalCount
    const ThreeD_count = threeD / totalCount
    const English_count = english / totalCount
    const Read_count = read / totalCount
    const Math_basic_count = math_basic / totalCount
    const Animation_count = animation / totalCount
    const Web_count = web / totalCount
    const GC_count = gc / totalCount
    const Video_count = video / totalCount
    const Text_count = text / totalCount
    const Activity_count = activity / totalCount

console.log(totalCount)
    // 嵌入HTML
    const pages = document.getElementById('pages');
    



    const Year_111 = ` <tr class="pb-1">
    <th scope="row my-5" style="font-family: 'Noto Sans TC', sans-serif;">111學年度</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Year_111_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Year_111);

    const Thoughts = ` <tr class="pb-1">
    <th scope="row my-5" style="font-family: 'Noto Sans TC', sans-serif;">心得&回顧</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${Thoughts_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Thoughts);



    const Feedback = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">回饋問卷</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Feedback_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Feedback);


    const ThreeD = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;" >3D軟體基礎課</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${ThreeD_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',ThreeD);
  
    const English = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">情境式英語課</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${English_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',English);

    const Read = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">閱讀理解素養課</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${Read_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Read);

    const Math_basic = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">基礎數學課</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Math_basic_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Math_basic);

    const Animation = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">電腦動畫設計基礎課</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${Animation_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Animation);

    const Web = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">基礎數學課</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Web_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Web);

    const GC = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">網站設計基礎課</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${GC_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',GC);

    const Video = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">影像處理編輯基礎課</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Video_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Video);

    const Text = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">文字造型設計基礎課</th>
    <td class="shadow rounded-top-5" style="--color:#F6B388; --size:${Text_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Text);

    const Activity = ` <tr class="pb-1">
    <th scope="row my-1" style="font-family: 'Noto Sans TC', sans-serif;">體驗學習課</th>
    <td class="shadow rounded-top-5" style="--color:#E7725C; --size:${Activity_count};"></td>
  </tr>`;

  pages.insertAdjacentHTML('beforeend',Activity);

    
    
  })
  .catch(error => console.error(error));


  
  //   網站各方面評價 ⭐

  // const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1O8xQzxHnxnuLQiQ5BAghBKoxEAasPNtYKhu1oZ3NA1g/values/sheet1?alt=json&key=AIzaSyD7UcpEu_UkHBEgehwF_Vwm9xa6he_A1YQ';
      
  //     fetch(uri)
  //       .then(res => res.json())
  //       .then(res => {
  //         const data = res.values;
  //         console.log(data);
      
  //         // 刪除第一個陣列
  //         data.shift();
          
      
  //         Array.prototype.forEach.call(data, d => {
  //  // 計算 web_image_design 欄位的加總
  //  let web_image_designSum = 0;
  //  for (let i = 0; i < data.length; i++) {
  //   web_image_designSum += parseInt(data[i][5]);
  //  }
  //  console.log(web_image_designSum);

  //  const web_image_design = web_image_designSum /(numRows*5);

  //  console.log(web_image_design)
   
  //           let racing = `<tr class="pb-4">
  //           <th scope="row"> 2016 </th>
  //           <td class="shadow rounded-end-5" style="--size:0.2; --color:#E7725C;"></td>
  //         </tr>`;
            
  //           document.querySelector('.js-append-card').insertAdjacentHTML('beforeend', racing);
  //         })
  //       })