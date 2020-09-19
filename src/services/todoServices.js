import http from '../tools/http';

export async function todos() {

    let res = await http.get('https://jsonplaceholder.typicode.com/posts');

    return res;
}