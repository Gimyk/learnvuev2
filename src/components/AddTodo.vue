<template>
  <div class="overlay">
    <form @submit.prevent="addTodo">
      <h3>Create TODO</h3>
      <input type="text" v-model="todo.name" placeholder="Enter Todo Name" />

      <input v-model="todo.type" placeholder="Enter Todo Type" name="pwd" />

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { http_post } from "@/assets/http-handler.js";
import { mapActions } from "vuex";
// import Snackbar from "@/components/Snackbar.vue";
export default {
  data() {
    return {
      todo: {
        name: "",
        type: "",
      },
    };
  },
  methods: {
    ...mapActions({
      addingTodo: "Todo/addTodo",
    }),
    async addTodo() {
      const res_data = await http_post("todos", this.todo);
      if (res_data.status === "successful") {
        this.todo._id = res_data.data._id;
        this.addingTodo(this.todo);
        this.todo = { name: "", type: "", _id: "" };
      }
      this.$emit("closeOvelay");
      this.$emit("addTodoEvent", res_data.status);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/scss_mixin/tools/mixin";
.overlay {
  @include flexi(row, center);
  form {
    width: 30%;
    button {
      width: 100%;
      // margin: 0;
    }
  }
}
</style>