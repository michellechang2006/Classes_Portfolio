const uri = 'https://sheets.googleapis.com/v4/spreadsheets/1sVGZz_w2O1Eq6ennNXYfndcQ7ga1tNYj7D8UJ-vl2-M/values/111?alt=json&key=AIzaSyB07NXroQXDNWW8MSDPy9Bo7UPX4_MAg5k';
fetch(uri)
  .then(res => res.json())
  .then(res => {
    const data = res.values;
    console.log(data);

    // 刪除第一個陣列
    data.shift();

    Array.prototype.forEach.call(data, d => {

      // 課程簡介
      let form_search = `<li class="my-2 mx-3"><label><input type="checkbox" name="which_pages" value="${d[0]}"> <i
      class=" bi-sort-down"></i> ${d[0]}</label></li>`;

      document.querySelector('.filters-items').insertAdjacentHTML('beforeend', form_search);


    })
    console.clear()
  })