import fetch from "../http/fetch";

export const getTags = () => fetch.get('tags')