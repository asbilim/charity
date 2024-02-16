const axios = require("axios");
const Backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
import Cookies from "js-cookie";
import { decrypt } from "../functions/crypto";
import { GetUsers } from "./user";

export const CreateConversation = async (id, adminId) => {
  const res = await axios.post(`${Backend_url}/conversation/`, {
    currentUser: id,
    adminId: adminId,
  });
  return res.data;
};

export const GetConversation = async (id) => {
  const conversation = [];
  const res = await axios.get(`${Backend_url}/conversation/${id}`);
  for (let i = 0; i < res.data.length; i++) {
    const friendId = res.data[i].members.find((m) => m !== id);
    const user = await axios.get(Backend_url + "/user/" + friendId);
    const last = await GetLastMessages(res.data[i]._id);
    conversation.push({
      conversation: res.data[i],
      user: user,
      last: last,
    });
  }
  return conversation;
};

export const GetConversationClient = async (id) => {
  const res = await axios.get(`${Backend_url}/conversation/${id}`);

  const conversation = res.data;
  return conversation;
};

export const CreateMessages = async (conversationId) => {
  const res = await axios.post(`${Backend_url}/message/`, {});
  return res.data;
};

export const GetMessages = async (conversationId) => {
  const res = await axios.get(`${Backend_url}/message/${conversationId}`);
  return res.data;
};

export const GetLastMessages = async (conversationId) => {
  const res = await axios.get(`${Backend_url}/message/last/${conversationId}`);
  return res.data;
};

export const DeleteMessages = async (id) => {
  const res = await axios.get(`${Backend_url}/message/${id}`);
  return res.data;
};
