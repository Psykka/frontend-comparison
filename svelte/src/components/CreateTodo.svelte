<script>
    export let todos;
    export let creatingTodo;

    let newTask = "";

    const createTodo = () => {
        console.log("Creating todo", newTask);
        todos = [...todos, { task: newTask, completed: false }];
        newTask = "";
        creatingTodo = false;
    };
</script>

<div class="card">
    <div class="card-content">
        <form class="form" on:submit|preventDefault={createTodo}>
            <label for="todo" class="label">Nova tarefa</label>
            <div class="field expanded-field">
                <input
                    name="todo"
                    class="input"
                    type="text"
                    placeholder="Tarefa"
                    autocomplete="off"
                    bind:value={newTask}
                />
            </div>
            <div class="field actions-left">
                <button
                    type="button"
                    class="btn btn-danger"
                    on:click={() => (creatingTodo = false)}
                >
                    Cancelar
                </button>
                <button type="submit" class="btn btn-primary">Criar</button>
            </div>
        </form>
    </div>
</div>
