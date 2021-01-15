<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="post">
      <div class="formitem">
        <input
          type="text"
          v-model="userdata.username"
          placeholder="Enter username"
        />
      </div>
      <div class="formitem">
        <input
          type="email"
          v-model="userdata.email"
          placeholder="Enter email"
        />
      </div>

      <div class="formitem">
        <input
          type="password"
          v-model="userdata.password"
          placeholder="Enter Password"
        />
      </div>
      <div class="formitem">
        <input
          type="password"
          v-model="userdata.confirmpassword"
          placeholder="Confirm Password"
        />
      </div>

      <button type="submit">SIGN UP</button>
    </form>
  </div>
</template>

<script>
import { http_post } from "@/assets/http-handler.js";
export default {
  name: "Login",
  data() {
    return {
      userdata: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  },
  methods: {
    post() {
      console.log("creating user ->", this.userdata);
      const res_data = http_post('signup',this.userdata);
      if (res_data.status === "successful") {
        console.log("creating user", res_data);
      }
    },
  },
};
</script>
<style scoped lang="scss" src="@/styles/signup.scss"></style>
