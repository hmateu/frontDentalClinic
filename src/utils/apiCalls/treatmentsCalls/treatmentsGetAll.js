import axios from "axios";
export const bringAllTreatments = () => {
    return (
        axios.get(`http://127.0.0.1:5000/treatments`)
    );
}