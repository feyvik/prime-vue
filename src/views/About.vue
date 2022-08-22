<!-- @format -->

<template>
  <div class="form-demo">
    <h5>Maximizable</h5>
    <Button
      label="Show"
      icon="pi pi-external-link"
      @click="openMaximizable"
    ></Button>
    <Dialog
      header="Header"
      v-model:visible="displayMaximizable"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :maximizable="true"
      :modal="true"
    >
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          @click="closeMaximizable"
          class="p-button-text"
        ></Button>
        <Button
          label="Yes"
          icon="pi pi-check"
          @click="closeMaximizable"
          autofocus
        ></Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/button";

export default defineComponent({
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayResponsive: false,
      displayConfirmation: false,
      displayMaximizable: false,
      displayPosition: false,
      position: "center",
    };
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openBasic2() {
      this.displayBasic2 = true;
    },
    closeBasic2() {
      this.displayBasic2 = false;
    },
    openResponsive() {
      this.displayResponsive = true;
    },
    closeResponsive() {
      this.displayResponsive = false;
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },
    openMaximizable() {
      this.displayMaximizable = true;
    },
    closeMaximizable() {
      this.displayMaximizable = false;
    },
    openPosition(position: string) {
      this.position = position;
      this.displayPosition = true;
    },
    closePosition() {
      this.displayPosition = false;
    },
  },
});
</script>
<style lang="css" scoped>
.card {
  min-width: 450px;
}
form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

@media screen and (max-width: 960px) {
  .card {
    width: 80%;
  }
}
</style>
