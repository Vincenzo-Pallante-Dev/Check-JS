let searchbar = document.querySelector("#searchbar");
let search = document.querySelector("#search");
let nome = document.querySelector("#nome");
let img = document.querySelector("#img");
let esperienza = document.querySelector("#esperienzaBase");
let abilità = document.querySelector("#abilità");

search.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchbar.value}`)
    .then((res) => res.json())
    .then((json) => {
      nome.innerText = json.name;

      img.src = json.sprites.front_default;

      esperienza.innerText = `Exp: ${json.base_experience}`;

      json.abilities.forEach((element) => {
        let li = document.createElement("li");
        li.innerText = `Abilità: ${element.ability.name}`;
        abilità.appendChild(li);
      });
    })
    // .then((el) => console.log(el))
    .catch((err) => alert(`Error: ${err}`));
});
