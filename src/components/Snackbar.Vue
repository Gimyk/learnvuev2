<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  data() {
    return {
      snackbar: false,
      text: "My timeout is set to 2000.",
      timeout: 20000,
    };
  },
};
</script>
<style></style>