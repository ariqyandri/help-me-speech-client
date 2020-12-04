export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
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
