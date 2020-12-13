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

    <!-- <v-snackbar v-model="snackbar" :timeout="timeout"> -->
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
import { http_post, http_get } from "@/assets/http-handler.js";
export default {
  name: "Todo",
  data() {
    return {
      todolist: [],
      todo: {
        name: "",
        type: "",
      },
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 20000,
    };
  },
  computed: {
    todoLen() {
      return this.todolist.length;
    },
  },
  methods: {
    async getTodos() {
      console.log("Fetching data");
      const res_data = await http_get("todos");
      console.log(res_data);
      if (res_data.status === "successful") {
        this.todolist = res_data.data;
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
    this.snackbar = true;
  },
};
</script>

<style scoped lang="scss" src="@/styles/todo.scss"></style>