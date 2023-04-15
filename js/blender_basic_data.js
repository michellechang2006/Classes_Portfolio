const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1E7gWckeGt2znBdnp8mXFG2cPMvk9qrbJJIpyla0VW6o/values/blender_basic?alt=json&key=AIzaSyChSjLDxCjYXAGKruUaNl4ErzdHsc1wBAI';

fetch(uri)
  .then(res => res.json())
  .then(res => {
    const data = res.values;
    console.log(data);

    // 刪除第一個陣列
    data.shift();

    Array.prototype.forEach.call(data, d => {

      // 課程簡介
      let aboutclass = `${d[0]}`;

      document.querySelector('#aboutclass').insertAdjacentHTML('beforeend', aboutclass);

      // 質性評語

      let rating = `${d[1]}`;

      document.querySelector('#rating').insertAdjacentHTML('beforeend', rating);

      // 課程內容

      let classcontent = `${d[2]}`;

      document.querySelector('#classcontent').insertAdjacentHTML('beforeend', classcontent);

      // 我的心得&收穫

      let thoughts = `${d[3]}`;

      document.querySelector('#thoughts').insertAdjacentHTML('beforeend', thoughts);

      // 我的反思&回顧

      let review = `${d[4]}`;

      document.querySelector('#review').insertAdjacentHTML('beforeend', review);




      // 本頁大綱-md

      let class_menu_items_md = `<a class="list-group-item m-3 h5 border-0 list-group-item-action" href="#rating">${d[6]}</a>
        <a class="list-group-item m-3 h5 border-0 list-group-item-action" href="#classcontent">${d[7]}</a>`

      document.querySelector('#class-menu-items-md').insertAdjacentHTML('beforeend', class_menu_items_md);


      // 本頁大綱-lg

      let class_menu_items_lg = `
      <a class="nav-link list-group-item m-xl-3 h5 border-0 list-group-item-action" href="#thoughts">${d[6]}</a>
        <a class="nav-link list-group-item m-xl-3 h5 border-0 list-group-item-action" href="#review">${d[7]}</a>
        `
      document.querySelector('#class-menu-items-lg').insertAdjacentHTML('beforeend', class_menu_items_lg);

    })
    console.clear()
  })
