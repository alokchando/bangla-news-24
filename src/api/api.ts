// categories
export const Navlinks = async () => {
  const response = await fetch("https://news-api-v2.vercel.app/api/categories");
  const res = await response.json();
  return res.data;
};
// Latest headlines
export const LatestHeadlinesApi = async () => {
  const response = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const res = await response.json();
  return res.data;
};

export const MostReadApi = async () => {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const res = await response.json();
  return res.data;
};
