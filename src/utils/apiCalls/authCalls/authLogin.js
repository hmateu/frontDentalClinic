import axios from "axios";
export const loginMe = async (credentials) => {
    return await (
        axios.post(`http://127.0.0.1:5000/auth/login`,credentials)
    );
}