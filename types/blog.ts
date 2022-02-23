import { Category } from './category';
import { microCmsCommon } from './microCmsCommon';

export type Blog = microCmsCommon & {
  title: string;
  body: string;
  category: Category[];
  eye_count: number;
  tag: string[];
};
