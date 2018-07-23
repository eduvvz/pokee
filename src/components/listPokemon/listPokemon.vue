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
      <b-row class="loader center-inside">
        <div v-show="isLoading">
          <img src="../../assets/loader.gif" alt="pikachu">
        </div>
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
      <br>
      <b-row>
        <b-col cols="12" class="center-inside">
          <button @click="pageGeneretion(-1)">Voltar</button>
          <button @click="pageGeneretion(1)">Proximo</button>
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
      pokemon: null,
      isLoading: false,
      currentPage: 1
    };
  },

  methods: {
    pageGeneretion(picker) {
      if(picker > 0) {
        this.currentPage++;
      } else {
        this.currentPage--;
      }
      this.showLoading();
      this.service
        .list(30, this.currentPage * 30 - 30)
        .then(
          pokemons => {
            console.log(pokemons);
            this.pokemons = pokemons.results;
            this.renderNumbersPokeball();
          },
          er => {
            this.msg = er.message;
          }
        )
        .finally(() => this.hideLoading());
    },
    sendToCard(name) {
      this.showLoading();
      this.pokemon = null;
      this.service
        .listForName(name)
        .then(
          pokemon => {
            //Setando ataque e defesa do pokémon para o card
            pokemon.stats.forEach(stat => {
              if (stat.stat.name == "attack") {
                pokemon.stats.attack = stat.base_stat;
              } else if (stat.stat.name == "defense") {
                pokemon.stats.defense = stat.base_stat;
              }
            });
            console.log(pokemon.types);
            this.pokemon = pokemon;
          },
          er => {
            this.msg = er.message;
          }
        )
        .finally(() => this.hideLoading());
    },

    renderNumbersPokeball() {
      // Renderizando classe(CSS) responsável pelas pokebolas como icon
      this.pokemons.forEach(poke => {
        poke.class = (
          "background-" + Math.floor(Math.random() * 7 + 1)
        ).toString();
      });
    },

    showLoading() {
      this.isLoading = true;
    },

    hideLoading() {
      this.isLoading = false;
    }
  },
  created() {
    this.service = new PokemonService(this.$resource);

    this.service.list(30).then(
      pokemons => {
        this.pokemons = pokemons.results;
        this.renderNumbersPokeball();
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
.loader {
  height: 100px;
}
.item-list {
  margin: 7px;

  span {
    font-family: "louis";
    margin-right: 7px;

    @media screen and (max-width: 768px) {
      margin-right: 1px;
    }
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
