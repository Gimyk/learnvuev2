<template>
  <div class="home">
    <Login v-if="toogle" />
    <SignUp v-if="!toogle" />
    <p>- OR - </p>
    <button @click="toggleV()">
      <span v-if="!toogle">Login</span>
      <span v-if="toogle">Sign Up</span>
    </button>
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
