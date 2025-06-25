const sheetUrl = 'https://script.google.com/macros/s/AKfycbwj4vkVYjpjQm8mBFYyR4SFl5f4gCi00hnz3vHvlH43yyB-VeoCsS5kmTTV5c5XBSbL/exec';

fetch(sheetUrl)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('grid');
    data.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = "_blank";
      const img = document.createElement('img');
      img.src = item.image;
      a.appendChild(img);
      grid.appendChild(a);
    });
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });
