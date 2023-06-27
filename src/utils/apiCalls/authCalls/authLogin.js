import axios from "axios";
export const loginMe = async (credentials) => {
    let res = await (
        axios.post(`http://127.0.0.1:5000/auth/login`,credentials)
    );
    return res.data.token
}