import type { Author } from './author';

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  content: string;
  category: string;
};

export type PostCategory =
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Vue'
  | 'ToyProject'
  | 'Tip'
  | 'HTML_CSS';
