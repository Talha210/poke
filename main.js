requestAPI = (pokemon) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            poke = {
          name: data["name"],
           hp: data["stats"][2]["base_stat"],
           attack: data["stats"][0]["base_stat"],
           defense: data["stats"][0]["base_stat"],
           abilities: data["abilities"][0]["ability"]["name"],
           picture: data["sprites"]["front_default"]


         }
        displayUser(poke)


        //console.log(poke);
        }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
    xhttp.send();
}



class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
  	this.abilities = abilities;
  }
}

class Trainer {
    constructor(number, name) {
        this.number
        this.name
    }
    aLL() {
      console.log(this.number);
      console.log(this.name);
    }
    get(Talha){

    }

    all(){

    }
    //this.pokemon.push(pokemon)
}



displayUser = (pokem) => {
  document.getElementById('hp').innerText = pokem.hp
  document.getElementById('attack').innerText = pokem.attack
  document.getElementById('defense').innerText = pokem.defense
  document.getElementById('abilities').innerText = pokem.abilities
  document.getElementById('name').innerText = pokem.name
  img = document.getElementById('pokeImage')
  img.setAttribute("src",pokem.picture)

}

function load() {
  var newSearch = document.getElementById('search')
  requestAPI(newSearch.value)
}
