<script>
    import Todo from "./components/Todo.svelte";
    import CreateTodo from "./components/CreateTodo.svelte";

    $: todos = [
        {
            task: "Fazer apps com Svelte",
            completed: false,
        },
        {
            task: "Programar JavaScript",
            completed: false,
        },
    ];

    $: creatingTodo = false;

    const deleteTodo = (e) => {
        todos.splice(e.detail, 1);
        todos = [...todos];
    };
</script>

<h1 class="title">TODO Svelte</h1>

<div class="content">
    {#each todos as todo, i}
        <Todo todo={{ ...todo, id: i }} on:deleteTodo={deleteTodo} />
    {/each}
    {#if creatingTodo}
        <CreateTodo bind:todos bind:creatingTodo />
    {:else}
        <button
            class="btn btn-primary btn-create-todo"
            on:click={() => (creatingTodo = true)}
        >
            Criar tarefa
        </button>
    {/if}
</div>
