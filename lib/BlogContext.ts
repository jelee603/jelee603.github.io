import { PostType } from '@/interfaces/post';
import { createContext } from 'react';

export const BlogContext = createContext<PostType[]>([]);
