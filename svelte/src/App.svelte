<script>
    import Todo from "./components/Todo.svelte";

    const todos = [
        {
            id: 1,
            task: 'Fazer uma rotina de alongamento de 15 minutos',
            completed: false
        },
        {
            id: 2,
            task: 'Programar JavaScript',
            completed: false
        }
    ]
</script>

<h1 class="title">TODO Svelte</h1>

<div class="content">
    {#each todos as todo}
        <Todo todo={todo} />
    {/each}
</div>
