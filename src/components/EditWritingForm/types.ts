export type Writing = {
  title: string;
  content: string;
  isPrivate: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  categoryId: number;
};

export type Props = { editWriting: Writing; id: number };
