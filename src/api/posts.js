import fetch from '../http/fetch'

export const createPost = (title, content) => fetch.post('posts', { title: title, content: content })

export const getPostsCount = () => fetch.get('posts/count')

export const getPosts = () => fetch.get('posts')

export const deletePost = (id) => fetch.delete(`posts/${id}`)

export const getPostById = (id) => fetch.get(`posts/${id}`)