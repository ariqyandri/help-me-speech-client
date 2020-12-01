export type Writing = {
  title: string | null;
  content: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number | null;
  categoryId: number | null;
  createdAt: any;
  updatedAt: any;
};

export type Props = { myWriting: Writing };
