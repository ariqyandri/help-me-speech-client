export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: any;
  updatedAt: any;
} | null;

export type Action = {
  type: "FETCH_CATEGORIES";
  payload: Category[];
};
