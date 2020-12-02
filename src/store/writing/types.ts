export type Writing = {
  id: number;
  title: string;
  content: string;
  private: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number;
  categoryId: number;
  user: User;
  category: Category;
  createdAt: any;
  updatedAt: any;
} | null;

export type User = {
  firstName: string;
  lastName: string;
};
export type Category = {
  name: string;
};
export type PostWriting = {
  title: string;
  content: string;
  imageUrl: string | null;
  videoUrl: string | null;
  categoryId: number;
};

export type Action = {
  type: "DISPLAY_WRITING";
  payload: Writing;
};
