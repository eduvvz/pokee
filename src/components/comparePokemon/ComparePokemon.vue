<template>
<transition enter-active-class="fadeInLeft" leave-active-class="fadeOut">
    <b-container class="animated">
        <hr>
        <b-row>
            <b-col>
                <h3>Comparar</h3>
            </b-col>
        </b-row>
        <br>
        <div v-if="pokemon1 == null && pokemon2 == null">
            <b-row>
                <b-col class="center-ver-hor">
                    <b-form-input class="input" size="lg" v-model="pokemonName1" type="text" placeholder="Nome do pokemon ...">
                    </b-form-input>
                </b-col>
                <b-cols cols="2" class="center-ver-hor">
                    <span id="vs">VS</span>
                </b-cols>
                <b-col class="center-ver-hor">
                    <b-form-input class="input" size="lg" v-model="pokemonName2" type="text" placeholder="Nome do pokemon ...">
                    </b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="12" class="center-ver-hor">
                    <b-button size="lg" variant="danger" @click="searchPokemons()">
                        <img src="../../assets/search.png" alt="search"> Procurar
                    </b-button>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <b-row>
                <b-col class="center-ver-hor" cols="12">
                    <div class="btn-close" @click="catchPokemons()">
                        <span>X</span>
                    </div>
                    <b-button size="lg" variant="danger" @click="comparePokemons()">
                        <img src="../../assets/search.png" alt="search"> Nossa opinião
                    </b-button>
                </b-col>
                <b-col v-show="opinionIsImportant">
                    <b-container>
                        <p class="text-center">
                            {{ textOpinion }}
                        </p>
                    </b-container>
                </b-col>
            </b-row>
        </div>
        <br>
        <b-row v-if="pokemon1 != null && pokemon2 != null">
            <b-col md="6">
                <panel :pokemon="pokemon1 ? pokemon1 : null">
                </panel>
            </b-col>
            <b-col md="6">
                <panel :pokemon="pokemon2 ? pokemon2 : null">
                </panel>
            </b-col>
        </b-row>
    </b-container>
</transition>
</template>

<script>
import PokemonService from "../../service/pokemon/PokemonService";
import Panel from "../shared/panel/Panel";

export default {
    components: {
        panel: Panel
    },

    data() {
        return {
            pokemonName1: "",
            pokemonName2: "",
            pokemon1: null,
            pokemon2: null,
            opinionIsImportant: false,
            textOpinion: "Na nossa opinião, o vencedor é: "
        }
    },

    methods: {
        catchPokemons() {
            this.pokemon1 = null;
            this.pokemon2 = null;
        }, 
        
        searchPokemons() {
            this.service.listForName(this.pokemonName1).then(pokemon => {
                this.pokemon1 = pokemon
            }, er => {
                this.msg = er.message
            })
            this.service.listForName(this.pokemonName2).then(pokemon => {
                this.pokemon2 = pokemon
            }, er => {
                this.msg = er.message
            });
        },

        comparePokemons() {
            let pointsPoke1 = 0,
                pointsPoke2 = 0;

            this.pokemon1.stats.forEach((statPoke1, index) => {
                let statPoke2 = this.pokemon2.stats[index];
                if (statPoke1.base_stat > statPoke2.base_stat) {
                    pointsPoke1++;
                } else {
                    pointsPoke2++;
                }
            });

            if (pointsPoke1 == pointsPoke2) {
                this.textOpinion = "Empate!";
            } else if (pointsPoke1 > pointsPoke2) {
                this.textOpinion += this.pokemon1.name;
            } else {
                this.textOpinion += this.pokemon1.name;
            }

            this.opinionIsImportant = true;

        }
    },

    created() {
        this.service = new PokemonService(this.$resource);
    }
};
</script>

<style lang="scss" scoped>
.btn-close {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}
.input {
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
}
</style>
