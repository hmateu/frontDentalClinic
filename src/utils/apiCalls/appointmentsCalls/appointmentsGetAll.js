import axios from "axios";
export const bringAllAppointments = async () => {
    try {

        let res = await axios.get(`http://127.0.0.1:5000/appointments`);

        return res.data;

    } catch (error) {
        console.log(error)
        return error
    }
}