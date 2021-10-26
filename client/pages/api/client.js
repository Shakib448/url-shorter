import { create } from "apisauce";

const apiClient = create({ baseURL: process.env.NEXT_HEROKU_URL });

export default apiClient;
