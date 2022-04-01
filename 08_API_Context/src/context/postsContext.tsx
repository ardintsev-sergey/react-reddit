import React from 'react';
import { usePostsData } from './../hooks/usePostsData';


export interface IPostContextData {
  id: string;
  preview: string;
  title: string;
  text: string;
  score: number;
  commentsCount: number;
  created: Date;
  authorId: string;
  author: string;
  authorIcon: string;
}

export interface IPostsContextData {
  after?: string;
  before?: string;
  children?: IPostContextData[];
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
