export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: any;
  updatedAt: any;
} | null;

export type CategoryById = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: any;
  updatedAt: any;
};

export type Action = {
  type: "FETCH_CATEGORIES";
  payload: Category[];
};
