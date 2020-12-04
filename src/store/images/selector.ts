import { ImageType } from "./types";

export const selectImages = (state: any) => state.images;
export const selectImagesIds = (state: any) =>
  state.images.map((image: ImageType) => {
    return image.id;
  });
