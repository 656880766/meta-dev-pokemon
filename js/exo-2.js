export const exo2 = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon`

    const response = await fetch(url);
    const result = await response.json();
    const pokemons =   result.results;
    const listePokemonUl = document.querySelector("#pokemons-list")
    

        for (let i = 0; i < pokemons.length; i++) { 
          const pokemonindex = pokemons[i].url.split('/'); 
           listePokemonUl.innerHTML += `
           <li>
            <p>Nom : ${pokemons[i].name}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonindex[pokemonindex.length - 2]}.png" alt="${pokemons[i].name}">
          </li>
           `
        }
}

