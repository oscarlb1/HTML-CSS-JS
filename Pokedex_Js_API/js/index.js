const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/"; // url de la api de pkmn
// RECUPERA LOS DATOS DE LOS 151 PKMN
for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
// AÑADE OO o O A LOS ID QUE TENGAN MENOS DE 3 CARÁCTERES
    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

// FUNCION QUE TE RECUPERA LOS DATOS DEL PKMN (IMAGEN, NOMBRE, ALTURA Y PESO Y TE LO DEVUELVE TODO DENTRO DE UN DIV)
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

// FUNCION PARA BUSCAR LOS TIPOS AL CLICAR EN LOS TIPOS DE ARRIBA Y QUE SE MUESTREN SOLO ESOS PKMN
botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id; // busca el id del boton que elijas
    listaPokemon.innerHTML = ""; // borra  la lista de pokemones para devolver solo los valores que has seleccionado
    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {
                if(botonId === "ver-todos") { // si el boton es el de ver todos te devuelve los datos de todos los pkmn
                    mostrarPokemon(data);
                } else { // sino busca el id del tipo que eliges y te devuelve los pkmn que tengan ese tipo
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }
            })
    }
}))