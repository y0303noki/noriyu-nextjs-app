import { Category } from './category';
import { Common } from './common';

export type Blog = Common & {
  title: string;
  body: string;
  category: Category[];
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  eye_count: number;
  tag: string[];
};
