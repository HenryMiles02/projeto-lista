const shopInput = document.getElementById('shopInput');
const shopBtn = document.getElementById('shopBtn');
const shopList = document.getElementById('shopList');
const img = document.querySelector('img');
const danger = document.getElementById('danger');
const text = document.getElementById('text');

shopBtn.addEventListener("click", function () {
  if (shopInput.value) {
  const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" id="item">
      <span for="none">${shopInput.value}</span>
      `
  const img = document.createElement('img');
  img.src = "img/lixeira.png";
  img.alt = "lixeira";
  listItem.appendChild(img);

  img.addEventListener("click", function () {
    listItem.remove()
    danger.style = `
    display: flex;
    `
  
    function removeAlert() {
      setTimeout(function () {
        danger.style = `
        display: none;
        `
      }, 4000);
    }
  
    removeAlert();
  });

    shopList.appendChild(listItem);

    shopInput.value = "";
    }
  });