import { create } from "apisauce";

// const apiClient = create({
//   baseURL: "https://warm-caverns-39390.herokuapp.com",
// });
const apiClient = create({
  baseURL: "http://localhost:5000",
});

export default apiClient;
