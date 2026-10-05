export interface NavsTyps {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

export interface HeadlinesType {
  id: string;
  title: string;
}
export interface MostReadType {
  category: string;
  id: string;
  title: string;
  link: "string";
  rank: number;
}

export interface NewsItemType {

    id: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    link: string;
    category: string;
}
