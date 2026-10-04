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
