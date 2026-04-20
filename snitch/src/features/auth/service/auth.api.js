import axios from "axios";

const authApi = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})

export const register = async ({ fullname, email, password, contact }) => {

    const response = await authApi.post("/register", {

        fullname,
        email,
        contact,
        password,
    })

    return response.data;
}