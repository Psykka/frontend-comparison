<script>
    import { createEventDispatcher } from "svelte";

    export let todo;

    const dispatch = createEventDispatcher();

    const completeTodo = () => {
        todo.completed = !todo.completed;
    }

    const deleteTodo = () => {
        dispatch("deleteTodo", todo.id);
    }
</script>

<div class="card">
    <input 
        type="checkbox"
        on:click={completeTodo}
    >
    <div class="card-content">
        <p class={todo.completed ? "completed" : ""}>
            {todo.task}
        </p>
    </div>
    <button
        class="btn btn-danger"
        on:click={deleteTodo}
    >
        Delete
    </button>
</div>