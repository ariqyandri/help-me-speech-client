import React from "react";
import { useSelector } from "react-redux";
import { selectImages } from "../../store/images/selector";

export default function ImagePreview() {
  const images = useSelector(selectImages);
  return <div></div>;
}
