import fetch from '../http/fetch'

export const createPost = (title, content) => fetch.post('posts', { title: title, content: content })