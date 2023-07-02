const axios = require("axios");
const Backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
import Cookies from "js-cookie";
import { decrypt } from "../functions/crypto";

export const GetNotifications = async () => {
  const res = await axios.get(`${Backend_url}/notification`);
  const notification = await res.data;
  return notification;
};

export const seeNotification = async (id, userId) => {
  await axios.put(`${Backend_url}/notification/${id}`,{
    id: userId,
  });
};
