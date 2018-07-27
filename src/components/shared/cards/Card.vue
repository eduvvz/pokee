<template>
    <div class="card" id="card">
        <div class="card-header center-ver-hor">
            <span>{{name}}</span>
        </div>
        <div class="card-img center-ver-hor">
            <img v-bind:src="urlImage" v-bind:alt="name">
        </div>
        <div class="card-body">
            <span>Ataque:</span>
            <b-progress v-bind:value="attack" :max="100" show-value class="mb-3" variant="danger"/>
            <span>Defesa:</span>
            <b-progress :value="defense" :max="100" show-value class="mb-3" variant="danger" />
            <span>Tipos:</span><br>
            <span v-for="(type, i) in types" :key="i" class="type-item">
              {{type.type.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {

  props: {
    name: {
      type: String,
      required: true
    },
    urlImage: {
      type: String,
      required: true
    },
    attack: {
      type: Number,
      required: true
    },
    defense: {
      type: Number,
      required: true
    },
    types: {
      type: Array,
      required: true
    }
  }

};
</script>

<style lang="scss" scoped>
.card {
  width: 240px;
  min-height: 350px;
  box-shadow: 0px 6px 10px 2px rgba(0, 0, 0, 0.58);
  padding: 10px;
  flex: 0 0 auto;
  margin: 15px;
}

.card-header {
  height: 50px;

  span {
    font-family: "louis";
    font-size: 1.6em;
  }
}

.card-img {
  width: 100%;
  min-height: 100px;
}

.card-body {
  width: 100%;
  height: auto;
  span {
      font-family: "louis";
      font-size: 1.1em;
      font-weight: bold;
  }
  .type-item {
    font-weight: normal;
    font-style: italic;
    padding: 4px;
  }
}
</style>