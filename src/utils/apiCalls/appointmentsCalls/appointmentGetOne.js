import axios from "axios";
export const bringOneAppointment = async (token,id) => {
  try {

    let res = await axios.get(`http://127.0.0.1:5000/appointments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("RESPUESTA DE LA AXIOS GETONEAPPOINTMENT",res.data.data)
    return res.data.data;

  } catch (error) {
    console.log(error)
    return error
  }
}