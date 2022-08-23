<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view /> -->
  <div>
    <profileVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import profileVue from "./views/profile/profile.vue";

export default defineComponent({
  name: "App",
  components: {
    profileVue,
  },
});
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
h1 {
  font-family: "Merriweather", serif;
}
p {
  font-size: 14px;
}
span {
  font-size: 12px;
}
</style>
