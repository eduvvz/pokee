<template>
    <b-container fluid class="header center-inside">
        <b-row>
            <h1>Poké<span>Shop</span></h1>
        </b-row>
    </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../../../assets/css/fonts.scss';

export default {}
</script>

<style lang="scss" scoped>
.header {
    background-image: url('../../../assets/pokemon.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    height: 150px;
    background-color: black;

    h1 {
        color: white;
        span{
            color: red;
        }
    }

    @media screen and (max-width: 768px){
        background-image: url('../../../assets/pokemon-mobile.jpg');
    }
}
</style>


