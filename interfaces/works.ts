export interface WorkType {
  title: string;
  date: string;
  contents: ContentType[];
  skill: string[];
}

type ContentType = {
  summary: string;
  range: string;
  performance: string[];
  description?: string | '';
};
