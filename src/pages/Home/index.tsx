import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeCategory from "../../components/HomeCategory/index";
import { selectCategories } from "../../store/categories/selector";
import "./Home.css";

export default function Home() {
  const categories = useSelector(selectCategories);
  return (
    <div>
      <Link
        to={"/writings/all"}
        className="hvr-grow"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h1>View some Writings!</h1>
      </Link>
      <div className="justifyHome">
        <HomeCategory categories={categories} />
      </div>
    </div>
  );
}
