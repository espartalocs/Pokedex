const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offsset}$limit=${limit}'

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="datail">
            <ol class="type">
                <li class="type"></li>
                <li class="type"></li>
            </ol>
            <img></img>
        </div>
    </li>
    `
}

const pokemonList =  document.getElementById('pokemonList')
fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemons) => {
    for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
        pokemonList.innerHTML += convertPokemonToHtml(pokemon)

    }
}).catch((error) => console.log(error))