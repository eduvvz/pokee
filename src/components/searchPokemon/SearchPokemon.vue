<template>
    <div>
        <b-container>
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
            <b-row class="center-inside">
                <b-col cols="6" >
                    <b-form-input size="md" v-model="name" 
                    type="text" placeholder="Nome do pokemon ...">
                    </b-form-input>
                </b-col>
                <b-col cols="2">
                    <b-button size="md" variant="danger">
                        <img src="../../assets/search.png" alt="search">
                    </b-button>
                </b-col>
            </b-row>
            <b-row>
                
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
        isLoading: false,
        name: ''
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
  height: 50px;
}

</style>


