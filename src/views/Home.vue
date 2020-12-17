<template>
  <div class="home">
    <Login v-if="toogle" />
    <SignUp v-if="!toogle" />
    <p>- OR - </p>
    <v-btn @click="toggleV()">
      <span v-if="!toogle">Login</span>
      <span v-if="toogle">Sign Up</span>
    </v-btn>

  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Home",
  components: {
    Login,
    SignUp,
  },
  data() {
    return {
      toogle: true,
    };
  },
  methods: {
    toggleV() {
      this.toogle = !this.toogle;
    },
  },
};
</script>
