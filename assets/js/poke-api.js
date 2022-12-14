const pokeApi = {}

function convertPokeApiDatailPokemon(pokenDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokenDetail.order
    pokemon.name = pokenDetail.name
    const types = pokenDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokenDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDatailPokemon)
}
pokeApi.getPokemons = (offset = 0, limit = 10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}$limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}       