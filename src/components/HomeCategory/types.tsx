export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string ;
  createdAt: any;
  updatedAt: any;
};

export type Props = { categories: Category[] };
