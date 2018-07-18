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
}

.center-inside {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
