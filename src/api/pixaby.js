import axios from "axios";

const api_key = `17331667-9320cee158cc14c7426ffb052`;
const base_url = `https://pixabay.com/api/`;

const fetchImage = async (page = 1, query, per_page = 12) => {
  try {
    const response = await axios
      .get(
        `${base_url}?q=${query}&key=${api_key}&image_type=photo&orientation=horizontal&page=${page}&per_page=${per_page}`
      )
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return { error };
  }
};

const pixabyAPI = {
  fetchImage,
};

export default pixabyAPI;
