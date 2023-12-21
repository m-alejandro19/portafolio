const frmBusqueda = document.querySelector('.formulario__busqueda');

//CONTAINER DONDE SE INSERTAN LOS POKEMONS
const pokemonsContainer = document.querySelector('.pokemons__container');

//CONTENEDOR DE LA LISTA DE POKEMONS
const pokemonContainerLista = document.createElement('DIV');
pokemonContainerLista.classList.add('pokemons__containerLista');

//CONTENEDOR DE LA BUSQUEDA DE POKEMONS
const pokemonContainerBusqueda = document.createElement('DIV');
pokemonContainerBusqueda.classList.add('pokemons__containerBusqueda');

//INPUT PARA BUSCAR EL POKEMON
const pokemonInput = document.getElementById('nombre-numero');

//BOTON PARA BUSCAR LOS POKEMONS POR ID O NOMBRE
const btnBuscarPokemon = document.querySelector('.formulario__submit');

//BOTON PARA LISTAR POKEMONS
const btnListarPokemons = document.querySelector('.btn-obtener-pokemons');

cargarEventListener();

function cargarEventListener() {
    frmBusqueda.addEventListener('submit', e => e.preventDefault());
    document.addEventListener('DOMContentLoaded', obtenerPokemons);
    btnBuscarPokemon.addEventListener('click', buscarPokemons);   
    btnListarPokemons.addEventListener('click', obtenerPokemons) 
};

async function obtenerPokemons() {

    limpiarHTML();

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';

    const respuesta = await fetch(url);
    const pokemons = await respuesta.json();
    
    const {results} = pokemons;

    //console.log(results);

    results.forEach( async (pokemon) => {

        const res = await fetch(pokemon.url);
        const poke = await res.json();

        //console.log(poke);

        const pokemonObj = {
            id: poke.id,
            nombre: poke.name,
            imagen: poke.sprites.other.dream_world.front_default
        };
        // console.log(pokemonObj.id);

        //console.log(pokemonObj.nombre);
        const cardPokemon = document.createElement('DIV');
        cardPokemon.classList.add('pokemon__card');

        const idPokemon = document.createElement('P');
        idPokemon.classList.add('pokemon__id');
        idPokemon.textContent = `Nº ${pokemonObj.id}`
        
        const nombrePokemon = document.createElement('P');
        nombrePokemon.classList.add('pokemon__nombre');
        nombrePokemon.textContent = `${pokemonObj.nombre}`;

        const imagenContainer = document.createElement('DIV');
        imagenContainer.classList.add('pokemon__imagen');
        
        const imagenPokemon = document.createElement('IMG');
        imagenPokemon.src = pokemonObj.imagen;
        imagenPokemon.alt = `${pokemonObj.nombre}`;
        imagenContainer.appendChild(imagenPokemon);

        cardPokemon.appendChild(idPokemon);
        cardPokemon.appendChild(nombrePokemon);
        cardPokemon.appendChild(imagenContainer);

        pokemonContainerLista.appendChild(cardPokemon);
        
        pokemonsContainer.appendChild(pokemonContainerLista);

    });
};

async function buscarPokemons() {
    // e.preventDefault();

    const nombreOId = pokemonInput.value.trim().toLowerCase();
    
    if(nombreOId === ''){
        alert('Introduce un Nombre o Número');
        
        return;
    };
    
    limpiarHTML();

    const url = `https://pokeapi.co/api/v2/pokemon/${nombreOId}`;

    try {
        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();

        const pokemonObj = {
            id: pokemon.id,
            nombre: pokemon.name,
            imagen: pokemon.sprites.other.dream_world.front_default
            // imgFront: pokemon.sprites.front_default,
            // imgBack: pokemon.sprites.back_default
        }; 

        //console.log(pokemonObj.imgBack);
        const cardPokemon = document.createElement('DIV');
        cardPokemon.classList.add('pokemon__card', 'pokemon__card-busqueda');

        const idPokemon = document.createElement('P');
        idPokemon.classList.add('pokemon__id');
        idPokemon.textContent = `Nº ${pokemonObj.id}`

        const nombrePokemon = document.createElement('P');
        nombrePokemon.classList.add('pokemon__nombre');
        nombrePokemon.textContent = `${pokemonObj.nombre}`;

        const imagenContainer = document.createElement('DIV');
        imagenContainer.classList.add('pokemon__imagen');

        const imagenPokemon = document.createElement('IMG');
        imagenPokemon.src = pokemonObj.imagen;
        imagenPokemon.alt = pokemonObj.nombre;
        imagenContainer.appendChild(imagenPokemon);

        cardPokemon.appendChild(idPokemon);
        cardPokemon.appendChild(nombrePokemon);
        cardPokemon.appendChild(imagenContainer);

        pokemonContainerBusqueda.appendChild(cardPokemon);

        pokemonsContainer.appendChild(pokemonContainerBusqueda);

    } catch (error) {
        console.log(error);
    };

    pokemonInput.value = '';
};

function limpiarHTML() {
    pokemonContainerLista.innerHTML = '';
    pokemonContainerBusqueda.innerHTML = '';
};