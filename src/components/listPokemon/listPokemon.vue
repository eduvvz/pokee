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
        </b-container>
    </div>
</template>

<script>
import PokemonService from '../../service/pokemon/PokemonService'

export default {
  data() {
    return {
      pokemons: null,
      msg: ''
    };
  },

  created() {
    this.service = new PokemonService(this.$resource);

    this.service
        .listar()
        .then(pokemons => this.pokemons, er => {
            this.msg = er.message;
            console.log(msg);

        });
  }
};
</script>

<style lang="scss" scoped>
</style>
