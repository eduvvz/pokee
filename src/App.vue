<template>
    <div>
      <app-header/>
      <app-menu :routes="routes"/>

      <router-view></router-view>
    </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";
import Header from "./components/shared/header/Header.vue";
import './assets/css/fonts.scss';

export default {
  components: {
    "app-menu": Menu,
    "app-header": Header
  },

  data() {
    return {
      routes : routes,
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;

  h1,h2,h3,h4 {
    font-family: 'pokemon';
  }
}

.center-ver-hor {
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-ver {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
