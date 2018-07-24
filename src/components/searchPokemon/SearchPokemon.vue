<template>
    <div>
        <b-container>
            <br>
            <hr>
            <b-row>
                <b-col>
                <h3>Buscar Pokémon</h3>
                </b-col>
            </b-row>
            <b-row class="loader center-inside">
                <div v-show="isLoading">
                    <img src="../../assets/loader.gif" alt="pikachu">
                </div>
            </b-row>
            <b-row v-show="msg">
                {{ msg }}
            </b-row>
            <b-row>
                <b-col cols="12" >
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
        msg: '',
        pokemon: null,
        isLoading: false
    };
  },

  methods: {
    showLoading() {
      this.isLoading = true;
    },

    hideLoading() {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>

.loader {
  height: 100px;
}

</style>


