<template>
  <div class="home">
    <Button label="Submit" icon="pi pi-check" iconPos="right"></Button>
    <Dialog></Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from 'primevue/button';

export default defineComponent({
  name: "Home",
  components: {
   Button
  },
});
</script>
