<template>
<transition enter-active-class="fadeInLeft" leave-active-class="fadeOut">
    <b-container class="animated">
        <hr>
        <b-row>
            <b-col sm='12' md="2" class="page-header center-ver-hor">
                <h3>Buscar Pokémon</h3>
            </b-col>
            <b-col cols="10" md="8" class="page-header center-ver-hor">
                <b-form-input size="lg" v-model="name" type="text" placeholder="Nome do pokemon ...">
                </b-form-input>
            </b-col>
            <b-col cols="2" class="page-header center-ver-hor">
                <b-button size="lg" variant="danger" @click="searchPokemon()">
                    <img src="../../assets/search.png" alt="search">
                </b-button>
            </b-col>
        </b-row>
        <b-row class="loader center-ver-hor">
            <div v-show="isLoading">
                <img src="../../assets/loader.gif" alt="pikachu">
            </div>
        </b-row>
        <b-row v-show="msg">
            {{ msg }}
        </b-row>
        <b-row v-if="pokemon" id="rowCard">
            <panel :pokemon="pokemon ? pokemon : null">
            </panel>
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
            msg: "",
            pokemon: null,
            isLoading: false,
            name: ""
        };
    },

    methods: {
        searchPokemon() {
            if (!this.name) {
                alert("Digite um nome");
            } else {
                this.pokemon = null;
                this.showLoading();
                this.msg = "";
                this.service
                    .listForName(this.name)
                    .then(
                        pokemon => {
                            this.pokemon = pokemon;
                        },
                        er => {
                            this.msg = er.message;
                        }
                    )
                    .finally(() => this.hideLoading());
            };
            this.name = "";
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
    }
};
</script>

<style lang="scss" scoped>
.page-header {
    margin-top: 10px;
}

.loader {
    height: 50px;
}
</style>
