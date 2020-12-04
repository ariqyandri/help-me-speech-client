import React from "react";
import { useSelector } from "react-redux";
import HomeCarousel from "../../components/HomeCarousel/index";
import { selectCategories } from "../../store/categories/selector";

export default function Home() {
  const categories = useSelector(selectCategories);
  return (
    <div>
      <h1>Help Me Speech!</h1>
{      <HomeCarousel categories={categories} />
}    </div>
  );
}
