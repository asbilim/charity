const axios = require("axios");
const Backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const GetUsers = async () => {
  const userId_temp = Cookies.get("user-token");
  if (userId) {
    const res = await axios.get(`${Backend_url}/user/${userId}`);
    const user = await res.data;
    return user;
  } else {
    return null;
  }
};

export const GetAdmin = async () => {
  const userId_temp = Cookies.get("user-token");
  const userId = userId_temp ? decrypt(userId_temp) : null;
  if (userId) {
    const res = await axios.get(`${Backend_url}/user/admin/${userId}`);
    const user = await res.data;
    return user;
  } else {
    return null;
  }
};

export const GetAdminId = async () => {
  const userId_temp = Cookies.get("user-token");
  const userId = userId_temp ? decrypt(userId_temp) : null;
  if (userId) {
    return userId
  } else {
    return null;
  }
};

export const GetAllAdmin = async () => {
  const res = await axios.get(`${Backend_url}/user/all/admin`);
  const user = await res.data;
  return user;
};
