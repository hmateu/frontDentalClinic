import axios from "axios";
export const bringAllAppointments = async (token) => {
    try {

        let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        let res = await axios.get(`http://127.0.0.1:5000/appointments`, config);

        return res.data;

    } catch (error) {
        console.log(error)
        return error
    }
}