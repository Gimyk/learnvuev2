<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="formitem">
        <label for="uname"><b>email</b></label>
        <input
          name="uname"
          type="email"
          v-model="userdata.email"
          placeholder="Enter email"
          autocomplete="section-blue shipping street-address"
        />
      </div>

      <div class="formitem">
        <label for="pwd"><b>Password</b></label>
        <input
          type="password"
          v-model="userdata.password"
          placeholder="Enter Password"
          name="pwd"
        />
      </div>

      <button type="submit">Login</button>
    </form>
    <Snackbar v-if="snc" :text="text" />
  </div>
</template>

<script>
import { http_post } from "@/assets/http-handler.js";
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "Login",
  components: {
    Snackbar,
  },
  data() {
    return {
      snc: false,
      text: "Loading",
      userdata: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    snack(msg) {
      this.snc = !this.snc;
      this.text = `${msg}`;
      setTimeout(() => {
        this.snc = !this.snc;
      }, 2000);
      console.log("calling", this.snc);
    },

    async login() {
      const res_data = await http_post("login", this.userdata);
      console.log(res_data);
      if (res_data) {
        if (res_data.status === "successful") {
          this.snack("Login Successful");
          this.$router.push("/todo");
        } else {
          this.snack(res_data.message);
          console.log("Something", res_data.message);
        }
      } else {
        this.snack("There might be a connection problem please try again");
      }
    },
  },
};
</script>
<style scoped lang="scss" src="@/styles/login.scss"></style>
