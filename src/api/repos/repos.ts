import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getRepos = async (repo: string) => {
  return await axiosInstance.get(`/search/repositories?q=${repo}`);
};
