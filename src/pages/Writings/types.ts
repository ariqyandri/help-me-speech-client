export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  userId: number;
  categoryId: number;
  user: User;
  category: Category;
  description: string | null;
  createdAt: any;
  updatedAt: any;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Category = {
  name: string;
};

export type Params = { category: string };
