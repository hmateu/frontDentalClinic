import axios from "axios";
export const bringAllUsersExceptAdmin = async (token) => {
    try {
        let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        let res = await axios.get(`http://127.0.0.1:5000/users/users`,config);

        console.log("Respuesta axios",res.data.data)
        return res.data.data;

    } catch (error) {
        console.log(error)
        return error
    }
}