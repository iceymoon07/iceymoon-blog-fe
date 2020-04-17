import fetch from '../http/fetch'

export const createPost = (title, content) => fetch.post('posts', { title: title, content: content })

export const getPostsCount = () => fetch.get('posts/count')

export const getPosts = () => fetch.get('posts')