import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzNiMDVmZTkzOWFlNTBjMDAyZTFiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDI3MDAzMCwiZXhwIjoxNjQwNTI5MjMwfQ.t8uRHurWns8QnTOzxgCO2fBFbkeVlWJQMUVIswboloE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
