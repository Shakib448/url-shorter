import client from "./client";

const endpoint = "/api/shortUrl";

const getShortUrls = () => client.get(endpoint);
const createShortUrl = (formData) => client.post(endpoint, formData);

export default {
  getShortUrls,
  createShortUrl,
};
