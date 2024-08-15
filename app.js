console.log('js file is loaded')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Medium",
  }


console.dir(pokemon, { maxArrayLength: null })

console.log("Arcanine")

    
console.log(game)

const starterPokemon = "Bulbasaur"
game.party.push("Bulbasaur");
console.log(game.party)


game.party.push('metapod', 'Butterfree', 'Squirtle')

console.log(game.party);

game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

console.log(game.gyms);

let party = [
    { name: 'Bulbasaur'},
];
let evolvedPokemon = { name: 'Ivysaur'};

party.splice(0, 1, evolvedPokemon);
console.log(party);

party.forEach(pokemon => {
    console.log(pokemon.name);
});

 game.catchPokemon = function(poemonObj) {
    this.party.push(pokemonObj);
 };
 
console.log(game.party);

partyCount: function() {
    return.party.Length
}





