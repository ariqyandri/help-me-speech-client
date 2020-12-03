import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import { updateWriting } from "../../store/writing/action";
import { Writing, Props, Category } from "./types";

export default function EditWritingForm(props: Props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [value, setValue] = useState<Writing>(props.editWriting);
  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleIsPrivate = (event: any) => {
    setValue({ ...value, isPrivate: value.isPrivate === true ? false : true });
  };
  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(updateWriting(value, props.id));
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={value.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            rows={3}
            value={value.content}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="categoryId"
            as="select"
            value={value.categoryId}
            onChange={handleChange}
            required
          >
            {categories.map((category: Category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            label={`Private`}
            checked={value.isPrivate}
            onChange={handleIsPrivate}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
