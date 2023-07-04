import axios from "axios";
import { bringAllAppointments } from "./appointmentsGetAll";
export const filterByPatientAppointment = async (token, nameCriteria) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  if (nameCriteria !== "") {
    let res = await axios.get(`http://127.0.0.1:5000/appointments/filter-by-patient?patientName=${nameCriteria}`, config)
    return res.data
  }
  const allAppointments = bringAllAppointments(token);
  return allAppointments;
}