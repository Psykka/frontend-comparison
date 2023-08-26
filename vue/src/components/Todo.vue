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
            this.$emit('completeTodo', this.todo.id);
        }
    },
    emits: ['deleteTodo', 'completeTodo']
}
</script>

<template>
    <input type="checkbox" @click="completeTodo">
    <div class="card-content">
        <p :class="{ completed: todo.completed }">
            {{ todo.task }}
        </p>
    </div>
    <button class="btn btn-danger" @click="deleteTodo">
        Delete
    </button>
</template>
