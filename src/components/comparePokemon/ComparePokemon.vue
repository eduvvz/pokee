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
    </b-container>
</transition>
</template>

<script>
import PokemonService from "../../service/pokemon/PokemonService";

export default {
    data() {
        return {
            pokemonName1: "",
            pokemonName2: "",
            pokemon1: null,
            pokemon2: null
        }
    },

    methods: {
        searchPokemons() {
            this.service.listForName(this.name).then(pokemon => {
                console.log(pokemon)
            }, er => {
                this.msg = er.message
            });
            this.service.listForName(this.name).then(pokemon => {
                console.log(pokemon)
            }, er => {
                this.msg = er.message
            });
        }
    },

    created() {
        this.service = new PokemonService(this.$resource);
    }
};
</script>

<style lang="scss" scoped>
.input {
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
}
</style>
