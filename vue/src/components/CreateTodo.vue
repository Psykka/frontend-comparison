<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        createTodo() {
            this.todos.push({
                task: this.newTask,
                completed: false
            });

            this.disableCreateTodo();
        },
        disableCreateTodo() {
            this.$emit('disableCreateTodo');
        }
    },
    data() {
        return {
            newTask: ''
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-content">
            <form class="form" @submit.prevent="createTodo">
                <label for="todo" class="label">Nova tarefa</label>
                <div class="field expanded-field">
                    <input name="todo" class="input" type="text" placeholder="Tarefa" autocomplete="off" v-model="newTask">
                </div>
                <div class="field actions-left">
                    <button type="button" class="btn btn-danger" @click="disableCreateTodo">
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">Criar</button>
                </div>
            </form>
        </div>
    </div>
</template>
