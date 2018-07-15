<template>
<b-navbar toggleable="md">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">
    <img src="../../../assets/pokeball.png" alt="">
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="#" class="link">Home</b-nav-item>
        <b-nav-item href="#" class="link">Buscar Pokémon</b-nav-item>
        <b-nav-item href="#" class="link">Comparar</b-nav-item>
      </b-navbar-nav>   
    </b-navbar-nav>
  </b-collapse>
</b-navbar>    
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style lang="scss" scoped>

.link {
  color: black;
}

</style>