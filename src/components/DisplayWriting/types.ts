export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number;
  categoryId: number;
  user: User;
  category: Category;
  createdAt: any;
  updatedAt: any;
};
export type User = {
  firstName: string;
  lastName: string;
};
export type Category = {
  name: string;
};
export type Props = { aWriting: Writing };
