export type Params = {
  id: string;
};

export type EditWriting = {
  title: string;
  content: string;
  isPrivate: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  categoryId: number;
};