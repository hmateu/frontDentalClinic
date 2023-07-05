import axios from "axios";
import { bringAllAppointments } from "./appointmentsGetAll";
import { bringPatientAppointments } from "./appointmentGetOnePatientController";
export const filterByPatientAppointment = async (token, nameCriteria, role) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  if (nameCriteria !== "") {
    let res = await axios.get(`http://127.0.0.1:5000/appointments/filter-by-patient?patientName=${nameCriteria}`, config)
    return res.data
  }

  if(role === 1){
    const allAppointments = bringAllAppointments(token);
    console.log(allAppointments)
    return allAppointments;
  }else {
    const myAppointments = bringPatientAppointments(token);
    console.log(myAppointments)
    return myAppointments;
  }
}