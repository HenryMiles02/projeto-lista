const shopInput = document.getElementById('shopInput');
const shopBtn = document.getElementById('shopBtn');
const shopList = document.getElementById('shopList');

shopBtn.addEventListener("click", function (e) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" id="item">
      <span for="none">${shopInput.value}</span>
      <img src="img/lixeira.png" alt="lixeira">`
    shopList.appendChild(listItem);
});

