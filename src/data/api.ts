export type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts`);

    if(!response.ok) {
        throw new Error('Http error: ${response.status}');
    }

    const data: Post[] = await response.json();
    return data;
}