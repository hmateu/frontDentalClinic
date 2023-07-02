import axios from "axios";
export const updateProfile = async (token,data) => {
  try {

    let res = await axios.put(`http://127.0.0.1:5000/users`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("RESPUESTA DE LA AXIOS UPDATEPROFILE",res.data)
    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}