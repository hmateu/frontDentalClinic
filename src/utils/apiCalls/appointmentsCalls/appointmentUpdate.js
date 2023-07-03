import axios from "axios";
export const updateAppointmentByPatient = async (data,token,id) => {
  try {

    let res = await axios.put(`http://127.0.0.1:5000/appointments/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("LLAMADA UPDATEAPPOINTMENT",res.data)
    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}