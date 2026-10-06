import {
  CategoryType,
  HeadlinesType,
  MostReadType,
  NavsType,
  NewsItemType,
  NewsSectionType,
} from "@/type/type";

// Categories
export const Navlinks = async (): Promise<NavsType[]> => {
  const response = await fetch("https://news-api-v2.vercel.app/api/categories");

  const res = await response.json();

  return res.data;
};

// Latest headlines
export const LatestHeadlinesApi = async (): Promise<HeadlinesType[]> => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10",
  );

  const res = await response.json();

  return res.data;
};

// Home page
export const HomePageApi = async (): Promise<NewsSectionType[]> => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections",
  );

  const res = await response.json();

  return res.data;
};

// Most read
export const MostReadApi = async (): Promise<MostReadType[]> => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
  );

  const res = await response.json();

  return res.data;
};

// One category
export const OneCategoryApi = async (id: string): Promise<CategoryType> => {
  const response = await fetch(
    
    `https://news-api-v2.vercel.app/api/category/${id}`,
  );

  const res = await response.json();

  return res;
};
