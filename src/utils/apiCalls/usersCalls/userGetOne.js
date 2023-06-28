import axios from "axios";
export const bringProfile = async (token) => {
    try {
        let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        let res = await axios.get(`http://127.0.0.1:5000/users/perfil`,config);

        console.log("Respuesta axios",res.data.data)
        // console.log("Token axios: ",token)
        return res.data.data;

    } catch (error) {
        console.log(error)
        return error
    }
}