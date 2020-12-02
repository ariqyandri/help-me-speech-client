export type Writing = {
  title: string | null;
  content: string | null;
  private: boolean | null;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number | null;
  categoryId: number | null;
  user: User | null;
  createdAt: any;
  updatedAt: any;
};

export type User = {
  firstName: string;
  lastName: string;
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
