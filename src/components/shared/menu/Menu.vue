<template>
<b-navbar toggleable="md" class="nav">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">
    <img src="../../../assets/pokeball.png" alt="">
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav v-for="(route, i) in routes" :key="i">
        <b-nav-item active :to="route.path ? route.path : '/'">
          {{ route.title }}
        </b-nav-item>
      </b-navbar-nav>   
    </b-navbar-nav>
  </b-collapse>
</b-navbar>    
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  props: {
    routes: {
      type: Array,
      required: true
    }    
  }
};
</script>

<style lang="scss" scoped>
.nav{
  padding-left: 50px;
  padding-right: 50px;
}
</style>