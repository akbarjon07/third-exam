const elPokemonList = document.querySelector(".pokemon__list");

for(let item of pokemons) {

  //CREATE ELEMENT
  const newItem = document.createElement("li");
  const newImage = document.createElement("img");
  const newWrapper = document.createElement("div");
  const newTitle = document.createElement("h5");
  const newType = document.createElement("p");
  const newCandy = document.createElement("p");

  //SET ATTRIBUTE
  newItem.setAttribute("class", "card mb-3");
  newItem.style.width = "18rem";
  newImage.classList.add("card-img-top");
  newImage.setAttribute("src", pokemons.img);
  newWrapper.classList.add("card-body");
  newTitle.classList.add("card-title");
  newType.classList.add("card-text");
  newCandy.classList.add("card-text");

  newTitle.textContent = pokemons.name;
  newType.textContent = pokemons.type;
  newCandy.textContent = pokemons.candy;

  //APPEND
  elPokemonList.appendChild(newItem);
  newItem.appendChild(newImage);
  newItem.appendChild(newWrapper);
  newWrapper.appendChild(newTitle);
  newWrapper.appendChild(newType);
  newWrapper.appendChild(newCandy);

}