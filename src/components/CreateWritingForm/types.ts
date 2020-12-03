export type Writing = {
  title: string;
  content: string;
  isPrivate: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  categoryId: number;
};
export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: any;
  updatedAt: any;
};
