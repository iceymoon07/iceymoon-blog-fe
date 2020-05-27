import fetch from "../http/fetch";

/**
 * post:{
 *   title:String,
 *   content:String
 * }
 */

export const getPosts = () => fetch.get("posts");

export const getPostsInfo = (orderBy, ascOrDesc) =>
  fetch.get(`posts/info?orderBy=${orderBy}&ascOrDesc=${ascOrDesc}`);

export const getPostById = id => fetch.get(`posts/${id}`);

export const getPostsCount = () => fetch.get("posts/count");

export const createPost = post => fetch.post("posts", post);

export const deletePost = id => fetch.delete(`posts/${id}`);

export const updatePost = (id, post) => fetch.put(`posts/${id}`, post);

export const addPostView = id => fetch.put(`posts/${id}/addview`);

export const getTagsInfo = () => fetch.get("posts/tags");

export const getPostsByTag = tag => fetch.get(`posts/tags/${tag}`);
