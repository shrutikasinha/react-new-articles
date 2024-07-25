import { GET_ARTICLES_URL } from "./constants";

export const getArticles = async () => {
  const resp = await fetch(GET_ARTICLES_URL);
  const data = await resp.json();
  return data;
};
