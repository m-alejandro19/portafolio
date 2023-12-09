//CONTAINER DONDE SE INSERTAN LOS POKEMONS
const pokemonsContainer = document.querySelector('.pokemons__container');

//CONTENEDOR DE LA LISTA DE POKEMONS
const pokemonContainerLista = document.createElement('DIV');
pokemonContainerLista.classList.add('pokemons__containerLista');

//CONTENEDOR DE LA BUSQUEDA DE POKEMONS
const pokemonContainerBusqueda = document.createElement('DIV');
pokemonContainerBusqueda.classList.add('pokemons__containerBusqueda');

//BOTON QUE INSERTA LOS POKEMONS EN EL CONTAINER
const btnObtenerPokemons = document.querySelector('.btn-obtener-pokemons');

//INPUT PARA BUSCAR EL POKEMON
const pokemonInput = document.getElementById('nombre-numero');

//BOTON PARA BUSCAR LOS POKEMONS POR ID O NOMBRE
const btnBuscarPokemon = document.querySelector('.formulario__submit');

cargarEventListener();

function cargarEventListener() {
    btnObtenerPokemons.addEventListener('click', obtenerPokemons);
    btnBuscarPokemon.addEventListener('click', buscarPokemons);    
};

async function obtenerPokemons() {

    limpiarHTML();

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

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

        //console.log(pokemonObj.nombre);
        const cardPokemon = document.createElement('DIV');
        cardPokemon.classList.add('pokemon__card')
        
        const nombrePokemon = document.createElement('P');
        nombrePokemon.classList.add('pokemon__nombre');
        nombrePokemon.textContent = `${pokemonObj.nombre}`;

        const imagenContainer = document.createElement('DIV');
        imagenContainer.classList.add('pokemon__imagen');
        
        const imagenPokemon = document.createElement('IMG');
        imagenPokemon.src = pokemonObj.imagen;
        imagenPokemon.alt = `${pokemonObj.nombre}`;
        imagenContainer.appendChild(imagenPokemon);

        cardPokemon.appendChild(nombrePokemon);
        cardPokemon.appendChild(imagenContainer);

        pokemonContainerLista.appendChild(cardPokemon)

        pokemonsContainer.appendChild(pokemonContainerLista);

    });
};

async function buscarPokemons(e) {
    e.preventDefault();

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

        //console.log(pokemon);

        const pokemonObj = {
            id: pokemon.id,
            nombre: pokemon.name,
            imgFront: pokemon.sprites.front_default,
            imgBack: pokemon.sprites.back_default
        }; 
        //console.log(pokemonObj.imgBack);
        const cardPokemon = document.createElement('DIV');
        cardPokemon.classList.add('pokemon__card');

        const nombrePokemon = document.createElement('P');
        nombrePokemon.classList.add('pokemon__nombre');
        nombrePokemon.textContent = `${pokemonObj.nombre}`;

        const imagenesContainer = document.createElement('DIV');
        imagenesContainer.classList.add('pokemon__imagenesBusqueda'); 

        const imagenFront = document.createElement('IMG');
        imagenFront.src = pokemonObj.imgFront;
        imagenFront.alt = pokemonObj.nombre;
        imagenesContainer.appendChild(imagenFront);

        const imagenBack = document.createElement('IMG');
        imagenBack.src = pokemonObj.imgBack;
        imagenBack.alt = pokemonObj.nombre;
        imagenesContainer.appendChild(imagenBack);

        cardPokemon.appendChild(nombrePokemon);
        cardPokemon.appendChild(imagenesContainer);

        pokemonContainerBusqueda.appendChild(cardPokemon);

        pokemonsContainer.appendChild(pokemonContainerBusqueda);

    } catch (error) {
        console.log(error);
    };
};

function limpiarHTML() {
    pokemonContainerLista.innerHTML = '';
    pokemonContainerBusqueda.innerHTML = '';
};