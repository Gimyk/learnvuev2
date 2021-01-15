<template>
  <div class="list">
    <div class="todos">
      <h3>TODO's</h3>
      <ul class="ul-unclickable" v-if="todoLen > 0">
        <li class="todo" v-for="(todo, index) in todolist" :key="index">
          <span>{{ todo.name }}</span>
          <v-icon @click="deleteOne(todo._id, index)">delete</v-icon>
        </li>
      </ul>
      <p v-if="todoLen == 0">
        There seems to be no todo lists, add then at the bottom
      </p>
    </div>
    <div class="fab">
      <v-btn
        class="mx-2"
        fab
        right
        bottom
        dark
        color="indigo"
        @click="showaddTodo()"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
    <Snackbar v-if="snc" :text="text" />
    <AddTodo
      v-if="addindTodo"
      @addTodoEvent="addEvent"
      @closeOvelay="showaddTodo"
    />
  </div>
</template>

<script>
import { http_get, http_delete } from "@/assets/http-handler.js";
import Snackbar from "@/components/Snackbar.vue";
import AddTodo from "@/components/AddTodo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todo",
  components: {
    Snackbar,
    AddTodo,
  },
  data() {
    return {
      snc: false,
      addindTodo: false,
      text: "Loading",
      todo: {
        name: "",
        type: "",
      },
    };
  },

  computed: {
    ...mapGetters({
      todolist: "Todo/getTodos",
      token: "User/getToken",
    }),
    todoLen() {
      return this.todolist.length;
    },
  },

  methods: {
    ...mapActions({ setTodo: "Todo/setTodo", deleteTodo: "Todo/deleteTodo" }),
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
          this.setTodo(res_data.data);
        }
        this.snack(res_data.message);
      } else {
        this.snack("There might be a connection problem please try again");
      }
    },

    async deleteOne(id, index,) {
      const res_data = await http_delete(`delete/${id}`, {
        Authorization: this.token,
      });
      console.log("deleting ++>", res_data);
      if (res_data) {
        if (res_data.status === "successful") {
          this.setTodo(res_data.data);
          console.log("index => ", index)
          this.deleteTodo(index);
        }
        this.snack(res_data.message);
      } else {
        this.snack("There might be a connection problem please try again");
      }
    },

    showaddTodo() {
      this.addindTodo = !this.addindTodo;
    },

    addEvent(data) {
      this.snack(`Adding Todo => ${data}`);
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style scoped lang="scss" src="@/styles/todo.scss"></style>