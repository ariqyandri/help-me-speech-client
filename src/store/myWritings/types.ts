export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
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

export type Action =
  | {
      type: "FETCH_MY_WRITINGS";
      payload: Writing[];
    }
  | {
      type: "CREATE_DESCRIPTION";
    };
