<template>
<transition enter-active-class="bounceInDown">
    <b-container class="panel animated">
        <b-row class="panel-title center-ver-hor">
            <h1>{{ pokemon.name }}</h1>
        </b-row>
        <br>
        <b-row class="center-ver-hor">
            <img :src="pokemon.sprites.front_default" alt="icon pokemon">
        </b-row>
        <hr>
        <b-row>
            <b-col class="text-center">Weight: {{pokemon.weight}}kg</b-col>
            <b-col class="text-center">Height: {{pokemon.height}}m</b-col>
            <b-col class="text-center">
                types:
                <span v-for="(type, i) in pokemon.types" :key="i"> {{type.type.name}} </span>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col md="6" v-for="(stat, i) in pokemon.stats" :key="i">
                <span>{{stat.stat.name.replace("-", " ")}}</span>
                <b-progress v-bind:value="stat.base_stat" :max="150" show-value class="mb-3" variant="danger" />
            </b-col>
        </b-row>
        <br>
    </b-container>
</transition>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
        }
    }
};
</script>

<style lang="scss" scoped>
.panel {
    background-color: rgb(228, 228, 228);
    border-radius: 30px 30px 30px 30px;
    min-height: 300px;
    width: 100%;
    margin-bottom: 30px;
}

.panel-title {
    background-color: red;
    border-radius: 30px 30px 0px 0px;
    padding: 15px;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
</style>
