import { Category } from './category';
import { Common } from './Common';

export type Blog = Common & {
  title: string;
  body: string;
  category: Category[];
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string[];
};
