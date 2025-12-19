// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4000", // backend URL
// });

// export default api;


// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4000", // backend running port
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fetchEmployees = async () => {
//   const res = await api.get("/users/employees");
//   return res.data;
// };

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------- Attach Token to Requests ---------- */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
