<script>
    export let todos;
    export let creatingTodo;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const createTodo = (e) => {
        todos = [...todos, { task: e.target[0].value, completed: false }];
        e.target[0].value = "";
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
                />
            </div>
            <div class="field actions-left">
                <button
                    type="button"
                    class="btn btn-danger"
                    on:click={() => creatingTodo = false}
                >
                    Cancelar
                </button>
                <button type="submit" class="btn btn-primary">Criar</button>
            </div>
        </form>
    </div>
</div>
