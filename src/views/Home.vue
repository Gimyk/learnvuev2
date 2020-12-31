<template>
  <div class="home">
    <Login v-if="toogle" />
    <SignUp v-if="!toogle" />

    <p>- OR -</p>

    <v-btn @click="toggleV()">
      <span v-if="!toogle">Login</span>
      <span v-if="toogle">Sign Up</span>
    </v-btn>
    <div class="test">
      {{ username }}
      <br />
      {{ token }}
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      token: "User/getToken",
      username: "User/getUserName",
    }),
    // token() {
    //   return this.$store.getters.getToken;
    // },
  },
};
</script>
<style  scoped>
.home {
  text-align: center;
}
</style>
