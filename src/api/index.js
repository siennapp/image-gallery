import axios from "axios";

export async function fetchImages(page) {
  const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);

  return data;
}
