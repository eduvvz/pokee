<template>
<transition enter-active-class="fadeInLeft" leave-active-class="fadeOut">
    <b-container class="animated">
        <hr>
        <b-row>
            <b-col>
                <h3>Pokémons</h3>
            </b-col>
        </b-row>
        <b-row v-show="msg">
            {{ msg }}
        </b-row>
        <b-row class="loader center-ver-hor">
            <div v-show="isLoading">
                <img src="../../assets/loader.gif" alt="pikachu">
            </div>
        </b-row>
        <b-row>
            <b-col class="center-ver-hor">
                <card :name="pokemon ? pokemon.name : ''" :urlImage="pokemon ? pokemon.sprites.front_default : ''" :attack="pokemon ? pokemon.stats.attack : 0" :defense="pokemon ? pokemon.stats.defense : 0" :types="pokemon ? pokemon.types : []" />
            </b-col>
            <b-col md="12" lg="8">
                <transition-group enter-active-class="fadeInUp">
                    <b-button class="button-list animated" @click="sendToCard(poke.name)" v-for="(poke, i) in pokemons" :key="i" size="lg">
                        <b-row>
                            <span class="img" v-bind:class="poke.class"></span>
                            <span>{{poke.name}}</span>
                        </b-row>
                    </b-button>
                </transition-group>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col cols="12" class="center-ver-hor">
                <b-button class="button-list" @click="pageGeneretion(-1)">Voltar</b-button>
                <b-button class="button-list" @click="pageGeneretion(1)">Proximo</b-button>
            </b-col>
        </b-row>
    </b-container>
</transition>
</template>

<script>
import PokemonService from "../../service/pokemon/PokemonService";
import Card from "../shared/cards/Card";

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
            currentPage: 1,
            showCard: false
        };
    },

    methods: {
        pageGeneretion(picker) {
            if (picker > 0) {
                this.currentPage++;
            } else {
                if (this.currentPage >= 1) {
                    this.currentPage--;
                }
            }
            this.showLoading();
            this.service
                .list(25, this.currentPage * 25 - 25)
                .then(
                    pokemons => {
                        this.pokemons = pokemons.results;
                        this.renderNumbersPokeball();
                        this.msg = '';
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
                        this.pokemon = pokemon;
                        this.msg = '';
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

        this.service.list(25).then(
            pokemons => {
                this.pokemons = pokemons.results;
                this.renderNumbersPokeball();
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
    height: 50px;
}

.button-list {
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
