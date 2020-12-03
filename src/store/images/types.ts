export type ImageStateType = ImageType[];

export type ImageType = {
  id: number;
  name: string;
  url: string;
  writingId: number | null;
  createdAt: any;
  updatedAt: any;
};

export type PostImage = {
  url: string;
  name: string;
};

export type Action =
  | {
      type: "DISPLAY_IMAGE";
      payload: ImageType;
    }
  | { type: "REMOVE_IMAGE"; payload: number }
  | { type: "REMOVE_ALL_IMAGE" };
