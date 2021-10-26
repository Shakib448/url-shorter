import client from "./client";

const endpoint = "/api/shortUrl";

const getShortUrls = () => client.get(endpoint);
const createShortUrl = (formData) => client.post(endpoint, formData);
const deleteShortUrl = (id) => client.delete(endpoint + `/${id}`);

export default {
  getShortUrls,
  createShortUrl,
  deleteShortUrl,
};
