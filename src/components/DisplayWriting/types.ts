export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  images: ImageType[] | null;
  userId: number;
  categoryId: number;
  user: User;
  category: Category;
  createdAt: any;
  updatedAt: any;
};
export type ImageType = {
  id: number;
  url: string;
  name: string;
};
export type User = {
  firstName: string;
  lastName: string;
};
export type Category = {
  name: string;
};
export type Props = { aWriting: Writing };
