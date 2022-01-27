export type Issue = {
  id: number;
  url: string;
  title: string;
  body: string;
  state: string;
  labels: string[];
  author_association: string;
  createdAt: string;
  updatedAt: string;
};
