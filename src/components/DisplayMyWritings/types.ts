export type Writing = {
  title: string;
  content: string;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number;
  categoryId: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
};

export type Props = { myWriting: Writing };
