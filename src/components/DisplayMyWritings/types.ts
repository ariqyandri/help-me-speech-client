export type Writing = {
  id: number;
  title: string;
  content: string;
  private: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number;
  categoryId: number;
  description: string | null;
  createdAt: any;
  updatedAt: any;
};

export type Props = { myWriting: Writing };
