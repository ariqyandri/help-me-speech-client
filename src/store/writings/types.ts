export type Writing = {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  userId: number;
  categoryId: number;
  user: User;
  category: Category;
  description: string | null;
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

export type Action =
  | {
      type: "FETCH_WRITINGS";
      payload: Writing[];
    }
  | {
      type: "CREATE_DESCRIPTION";
    }
  | {
      type: "REMOVE_MY_WRITINGS";
      payload: number;
    };
