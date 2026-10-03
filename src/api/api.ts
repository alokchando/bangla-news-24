// categories
export const Navlinks = async () => {
  const response = await fetch("https://news-api-v2.vercel.app/api/categories");



  const res = await response.json();
  return res.data

};
