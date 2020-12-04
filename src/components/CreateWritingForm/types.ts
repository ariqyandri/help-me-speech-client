export type Writing = {
  title: string;
  content: string;
  isPrivate: boolean;
  categoryId: number;
};
export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: any;
  updatedAt: any;
} 

