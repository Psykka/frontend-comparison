<script>
import Todo from "./components/Todo.vue";
import CreateTodo from "./components/CreateTodo.vue";

export default {
  data() {
    return {
      todos: [
        {
          task: "Fazer apps com Vue",
          completed: false,
        },
        {
          task: "Programar JavaScript",
          completed: false
        },
      ],
      creatingTodo: false
    };
  },
  components: {
    Todo,
    CreateTodo
  },
  methods: {
    deleteTodo(id) {
      this.todos.splice(id, 1);
    },
    disableCreateTodo() {
      this.creatingTodo = false;
    }
  }
};
</script>

<template>
  <h1 class="title">TODO Vue</h1>

  <div class="content">
    <div class="card" v-for="(todo, i) in todos" :key="i">
      <Todo :todo="{ ...todo, id: i }" @deleteTodo="deleteTodo" />
    </div>
    <CreateTodo v-if="creatingTodo" :creatingTodo="creatingTodo" v-bind="{ todos }" @disableCreateTodo="disableCreateTodo" />
    <button class="btn btn-primary btn-create-todo" @click="creatingTodo = true" v-else>
      Criar tarefa
    </button>
  </div>
</template>
