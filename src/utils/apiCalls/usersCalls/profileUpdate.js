import axios from "axios";
export const updateProfile = async (data,token) => {
  try {

    let res = await axios.put(`http://127.0.0.1:5000/users`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;

  } catch (error) {
    console.log(error)
    return error
  }
}