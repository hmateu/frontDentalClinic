import axios from "axios";
export const bringAllUsers = async (token) => {
    try {

        let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        let res = await axios.get(`http://127.0.0.1:5000/users`, config);

        // console.log(res.data.data)
        return res.data.data;

    } catch (error) {
        console.log(error)
        return error
    }
}