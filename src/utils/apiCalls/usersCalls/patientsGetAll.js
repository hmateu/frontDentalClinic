import axios from "axios";
export const bringAllPatients = async (token) => {
    try {
        let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        let res = await axios.get(`http://127.0.0.1:5000/users/patients`,config);

        console.log("Respuesta axios",res.data.data)
        return res.data.data;

    } catch (error) {
        console.log(error)
        return error
    }
}