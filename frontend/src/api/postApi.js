import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const fetchPosts = () => axios.get(API_URL);
export const createPost = (data) => axios.post(API_URL, data);
