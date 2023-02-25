import { Dispatch, SetStateAction } from 'react';
import { BlogData } from '.';

export interface BlogPostContextType {
  allBlogData: BlogData[] | null;
  setAllBlogData: Dispatch<SetStateAction<BlogData[] | null>>;
}
