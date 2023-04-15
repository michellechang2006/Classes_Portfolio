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
      let form_search = `<option value="${d[2]}">`;

      document.querySelector('.form_search').insertAdjacentHTML('beforeend', form_search);


    })
    console.clear()
  })