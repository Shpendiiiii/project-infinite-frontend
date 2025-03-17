<script lang="ts">
    import type {TestData} from "$types";

    export let data: TestData;
</script>

<h1>Blog Posts</h1>

{#if data.posts}
    <ul>
        {#each data.posts as post}
            <li>
                <h2>{post.title}</h2>
                <p>{post.posts}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>Loading posts...</p>
{/if}