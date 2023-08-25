<template>
    <input type="checkbox" @click="completeTodo">
    <div class="card-content">
        <p :class="{ completed: todo.completed }">{{ todo.task }}</p>
    </div>
    <button class="btn btn-danger" @click="deleteTodo">
        Delete
    </button>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo() {
            this.$emit('deleteTodo', this.todo.id);
        },
        completeTodo() {
            this.todo.completed = !this.todo.completed;
        }
    },
    emits: ['deleteTodo']
}
</script>