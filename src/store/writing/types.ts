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
} | null;

export type ImageType = {
  id: number;
  url: string;
  name: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Category = {
  name: string;
};

export type Action = {
  type: "DISPLAY_WRITING";
  payload: Writing;
};
