const shopInput = document.getElementById('shopInput');
const shopBtn = document.getElementById('shopBtn');
const shopList = document.getElementById('shopList');

shopBtn.addEventListener("click", function () {
  /*
  +-------------+
  | item 1      | -> cada um destes é um listItem (li)
  | item 2      |
  | item 3      |
  +-------------+
*/

  const listItem = document.createElement("li"); // Cria um item da lista
  /*
  +-------------+
  | item 1      |
  | item 2      |
  | item 3      |
  | *item 4     | -> este é o listItem que acabamos de criar que **ainda não foi adicionado** na lista geral de itens
  +-------------+
*/

  // Cria o checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.appendChild(checkbox); // adiciona no item da lista

  /*
  +-------------+
  | item 1      |
  | item 2      |
  | item 3      |
  | *item 4     |
  +-|-----------+
    |
    +----> [ ] -> adicionamos um checkbox ao item que recém criamos
*/

  // Cria o span
  const span = document.createElement("span");
  span.innerHTML = shopInput.value;
  listItem.appendChild(span); // adiciona no item da lista

  /*
  +-------------+
  | item 1      |
  | item 2      |
  | item 3      |
  | *item 4     |
  +-|-----------+
    |
    +----> [ ] "cebola" -> adicionamos um span ao lado do checkbox
*/

  // Cria a imagem da lixeira
  const img = document.createElement("img");
  img.src = "img/lixeira.png";
  img.alt = "lixeira";
  listItem.appendChild(img); // adiciona no item da lista

  /*
  +-------------+
  | item 1      |
  | item 2      |
  | item 3      |
  | *item 4     |
  +-|-----------+
    |
    +----> [ ] "cebola" X -> adicionamos uma imagem da lixeira ao lado do span
*/

  img.addEventListener("click", function () {
    listItem.remove(); // ao clicar na imagem da lixeira, remove o item da lista
  });
  /*
  - o `img` é uma referência de memória à imagem que acabamos de criar
  - o `addEventListener` é um método que permite adicionar um evento a um elemento
  - o evento que estamos adicionando é o "click"
  - a função que passamos para o `addEventListener` é executada toda vez que o evento "click" acontece
  - a função que passamos para o `addEventListener` remove o item da lista
*/

  // Adiciona o item da lista no final da lista geral de itens
  shopList.appendChild(listItem);

  /*
  +-------------+
  | item 1      |
  | item 2      |
  | item 3      |
  | item 4      | -> adicionamos o item que acabamos de criar na lista geral de itens, para que apareça na tela
  +-|-----------+
    |
    +----> [ ] "cebola" X
*/

  shopInput.value = ""; // Limpa o campo de texto e prepara para o próximo item
});

