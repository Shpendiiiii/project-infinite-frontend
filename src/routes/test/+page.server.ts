import type { TestData } from '$types';

export const load: ({fetch}: { fetch: any }) => Promise<{ posts: any }> = async ({ fetch }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return { posts };
};