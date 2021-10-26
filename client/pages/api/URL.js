import client from "./client";

const endpoint = "/api/shortUrl";

const getShortUrl = () => client.get(endpoint);
const createShortUrl = (formData) => client.post(endpoint, formData);

export default {
  getShortUrl,
  createShortUrl,
};
