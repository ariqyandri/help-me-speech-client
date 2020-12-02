export type Writing = {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  videoUrl: string | null;
  userId: number;
  categoryId: number;
  category: Category;
  description: string | null;
  createdAt: any;
  updatedAt: any;
} | null;

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

export type Action =
  | {
      type: "FETCH_MY_WRITINGS";
      payload: Writing[];
    }
  | {
      type: "CREATE_DESCRIPTION";
    };
