<template>
<transition enter-active-class="fadeInLeft" leave-active-class="fadeOut" :duration="1000">
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
    </b-container>
</transition>
</template>

<script>
export default {
    data() {
        return {
            pokemon1: null,
            pokemon2: null
        }
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
