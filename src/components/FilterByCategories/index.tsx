import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import { Category } from "./types";

export default function FilterByCategories() {
  const categories = useSelector(selectCategories);
  const [id, setId] = useState(0);

  return (
    <>
      <ButtonGroup toggle>
        {categories.map((category: Category) => (
          <ToggleButton
            type="radio"
            variant="primary"
            value={category.id}
            checked={id === category.id}
            onChange={(e) => setId(parseInt(e.target.value))}
          >
            {category.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}
