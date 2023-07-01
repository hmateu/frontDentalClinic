import axios from "axios";
export const createNewAppointment = async (token,data) => {
  try {

    let res = await axios.post(`http://127.0.0.1:5000/appointments`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("RESPUESTA DE LA AXIOS CREATENEWAPPOINTMENT",res.data)
    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}