

  const url = 'https://sheets.googleapis.com/v4/spreadsheets/1sVGZz_w2O1Eq6ennNXYfndcQ7ga1tNYj7D8UJ-vl2-M/values/classes_items?alt=json&key=AIzaSyB07NXroQXDNWW8MSDPy9Bo7UPX4_MAg5k';
  
  fetch(url)
    .then(res => res.json())
    .then(res => {
      const data = res.values;
      console.log(data);
  
      // 刪除第一個陣列
      data.shift();
  
      Array.prototype.forEach.call(data, d => {

        // 111 sidemenu
        let sidemenu_items = `<a href="${d[2]}" class="nav-dropdown-text mx-1 my-2"> <i class="bi bi-book"></i>${d[0]}</a></li>`;
        
        document.querySelector('#sidemenu_items').insertAdjacentHTML('beforeend', sidemenu_items);

        // 111 topmenu
        let topmenu_items = `<li>
        <a class="dropdown-item bg-primary mt-3 " href="${d[2]}"><span
            class="dropdown-content-md">
            <i class="bi-topmenu bi-book"></i> ${d[1]}</span>
        </a>
      </li>`;
        
        document.querySelector('#topmenu_items').insertAdjacentHTML('beforeend', topmenu_items);

        
    })
      
    })
    
