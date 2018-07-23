<template>
  <div>
    <b-container>
      <br>
      <hr>
      <b-row>
        <b-col>
          <h3>Pokémons</h3>
        </b-col>
      </b-row>
      <br>
      <b-row v-show="msg">
        {{ msg }}
      </b-row>
      <b-row>
        <b-col class="center-inside">
          <card :name="pokemon ? pokemon.name : ''"
            :urlImage="pokemon ? pokemon.sprites.front_default : ''"
            :attack="pokemon ? pokemon.stats.attack : 0" 
            :defense="pokemon ? pokemon.stats.defense : 0"
            :types="pokemon ? pokemon.types : []">
          </card>
      </b-col>
      <b-col md="12" lg="8">
        <b-button class="item-list" @click="sendToCard(poke.name)" 
        v-for="(poke, i) in pokemons" :key="i" size="lg">
          <b-row>
            <span class="img" v-bind:class="poke.class"></span>
            <span>{{poke.name}}</span>
          </b-row>
        </b-button>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PokemonService from "../../service/pokemon/PokemonService";
import Card from "../shared/cards/Card";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    card: Card
  },

  data() {
    return {
      pokemons: [],
      msg: "",
      pokemon: null
    };
  },

  methods: {
    sendToCard(name) {
      this.service.listForName(name).then(pokemon => {
        //Setando ataque e defesa do pokémon para o card
        pokemon.stats.forEach(
        (stat) => {
          if (stat.stat.name == 'attack') {
            pokemon.stats.attack = stat.base_stat;
          } else if(stat.stat.name == 'defense'){
            pokemon.stats.defense = stat.base_stat;
          }
        });
        console.log(pokemon.types);
        this.pokemon = pokemon;
      });
    }
  },

  created() {
    this.service = new PokemonService(this.$resource);

    this.service.list(40).then(
      pokemons => {
        this.pokemons = pokemons.results;

        // Renderizando classe(CSS) responsável pelas pokebolas como icon
        this.pokemons.forEach(poke => {
          poke.class = ("background-"+Math.floor(Math.random() * 7 + 1)).toString();
        });

        console.log(this.pokemons);
      },
      er => {
        this.msg = er.message;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.item-list {
  margin: 7px;

  span {
    font-family: "louis";
    margin-left: 7px;
    margin-right: 7px;
  }

  .img {
    width: 30px;
    height: 30px;
    position: relative;

    &.background-1 {
      background-image: url("../../assets/pokeball1.png");
    }
    &.background-2 {
      background-image: url("../../assets/pokeball2.png");
    }
    &.background-3 {
      background-image: url("../../assets/pokeball3.png");
    }
    &.background-4 {
      background-image: url("../../assets/pokeball4.png");
    }
    &.background-5 {
      background-image: url("../../assets/pokeball5.png");
    }
    &.background-6 {
      background-image: url("../../assets/pokeball6.png");
    }
    &.background-7 {
      background-image: url("../../assets/pokeball7.png");
    }
  }
}
</style>
