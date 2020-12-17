<template>
  <div class="list">
    <div class="todos">
      <h3>TODO's</h3>
      <ul class="ul-unclickable" v-if="todoLen > 0">
        <li v-for="(todo, index) in todolist" :key="index">
          {{ todo.name }}
        </li>
      </ul>
      <p v-if="todoLen == 0">
        There seems to be no todo lists, add then at the bottom
      </p>
    </div>
    <form @submit.prevent="addTodo">
      <h3>Create TODO</h3>
      <input type="text" v-model="todo.name" placeholder="Enter Todo Name" />

      <input v-model="todo.type" placeholder="Enter Todo Type" name="pwd" />

      <button type="submit">Create</button>
    </form>
    <Snackbar v-if="snc" :text="text" />
  </div>
</template>

<script>
import { http_post, http_get } from "@/assets/http-handler.js";
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "Todo",
  components: {
    Snackbar,
  },
  data() {
    return {
      snc: false,
      text: "Loading",
      todolist: [],
      todo: {
        name: "",
        type: "",
      },
    };
  },
  computed: {
    todoLen() {
      return this.todolist.length;
    },
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

    async getTodos() {
      console.log("Fetching data");
      const res_data = await http_get("todos");
      console.log(res_data);
      if (res_data) {
        if (res_data.status === "successful") {
          this.todolist = res_data.data;
          this.snack(res_data.message);
        } else {
          this.snack(res_data.message);
          console.log("Something", res_data.message);
        }
      } else {
        this.snack("There might be a connection problem please try again");
      }
    },

    async addTodo() {
      const res_data = await http_post("todos", this.todo);
      if (res_data.status === "successful") {
        this.getTodos();
      }
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style scoped lang="scss" src="@/styles/todo.scss"></style>