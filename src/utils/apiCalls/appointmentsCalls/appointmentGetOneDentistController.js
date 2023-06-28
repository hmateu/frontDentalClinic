import axios from "axios";

export const bringDentistAppointments = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let res = await axios.get(`http://127.0.0.1:5000/appointments/dentist`, config);
  return res.data.data;
};