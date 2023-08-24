<script>
    export let todo;

    const completeTodo = () => {
        todo.completed = !todo.completed
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
    <button class="btn">
        Delete
    </button>
</div>