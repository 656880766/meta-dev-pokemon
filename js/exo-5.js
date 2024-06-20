export const exo5 = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon`

    const response = await fetch(url);
    const result = await response.json();
    const pokemons =   result.results;
    
    console.log(pokemons)
    const listePokemonUl = document.querySelector("#pokemons-list")
    let innerHTML = ""
   


        for (let i = 0 , l = pokemons.length ; i < l; i++) { 
          const pokemonindex = pokemons[i].url.split('/'); 
          innerHTML += `
           <li >
            <p>Nom : ${pokemons[i].name}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonindex[pokemonindex.length - 2]}.png" alt="${pokemons[i].name}">
            <button data-id= ${pokemonindex[pokemonindex.length - 2]}>Details</button>
          </li>
          
           `
           
        }

        listePokemonUl.innerHTML= innerHTML;

        const listeButtons = listePokemonUl.querySelectorAll('button');
        listeButtons.forEach(btn => {
          btn.addEventListener('click', (e) =>{
            console.log(e.target.dataset.id)
          })
        });
}


