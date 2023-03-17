import axios from "axios"
const pluginPublic = axios.create({
  baseURL: "https://website.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
