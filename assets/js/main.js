const offset =0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}$limit=${limit}'
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
pokeApi.getPokemons()
.then((pokemons) => {
    const listItems = []
    for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
       listItems.push(convertPokemonToHtml(pokemon))

    }
    console.log(listItems)
})