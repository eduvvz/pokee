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
        </b-container>
    </div>
</template>

<script>
import PokemonService from '../../service/pokemon/PokemonService'

export default {
  data() {
    return {
      pokemons: null,
      msg: null
    };
  },

  created() {
    this.service = new PokemonService(this.$resource);

    this.service
        .listar()
        .then(pokemons => this.pokemons = pokemons, er => msg = er);
  }
};
</script>

<style lang="scss" scoped>
</style>
