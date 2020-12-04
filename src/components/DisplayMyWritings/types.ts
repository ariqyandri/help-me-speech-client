export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  userId: number;
  categoryId: number;
  category: Category;
  description: string | null;
  createdAt: any;
  updatedAt: any;
};
export type Category = {
  name: string;
};
export type Props = { myWriting: Writing };
