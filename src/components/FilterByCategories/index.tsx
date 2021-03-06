import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import { Category, Props } from "./types";
import "./FilterByCategories.css";

export default function FilterByCategories(props: Props) {
  const categories = useSelector(selectCategories);
  return (
    <>
      <ButtonGroup toggle className="filterButtons">
        <ToggleButton
          key={0}
          type="radio"
          variant="outline-dark"
          value={0}
          checked={props.id === 0}
          onChange={(e) => props.setId(parseInt(e.target.value))}
        >
          All
        </ToggleButton>
        {categories.map((category: Category) => (
          <ToggleButton
            key={category.id}
            type="radio"
            variant="outline-dark"
            value={category.id}
            checked={props.id === category.id}
            onChange={(e) => props.setId(parseInt(e.target.value))}
          >
            {category.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}
