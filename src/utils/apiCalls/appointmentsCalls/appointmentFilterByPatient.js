import axios from "axios";
export const filterByPatientAppointment = async (token,criteria) => {
  try {
    // console.log(criteria);
    let res = await axios.get(`http://127.0.0.1:5000/appointments/filter-by-patient?patientName=${criteria.filter}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("RESPUESTA DE LA AXIOS CREATENEWAPPOINTMENT",res.data)
    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}