import axios from "axios"
const cBPluginPublic = axios.create({
  baseURL: "https://website.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
