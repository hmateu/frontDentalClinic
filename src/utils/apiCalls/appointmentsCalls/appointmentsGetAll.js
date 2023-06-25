import axios from "axios";
export const bringAllAppointments = () => {
    return (
        axios.get(`http://127.0.0.1:5000/appointments`)
    );
}