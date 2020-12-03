import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import { postWriting } from "../../store/writing/action";
import ImagePreview from "../ImagePreview";
import UploadImage from "../UploadImage";
import { Writing, Category } from "./types";

export default function CreateWritingForm() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [value, setValue] = useState<Writing>({
    title: "",
    content: "",
    isPrivate: false,
    imageUrl: null,
    videoUrl: null,
    categoryId: 0,
  });
  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleIsPrivate = (event: any) => {
    setValue({ ...value, isPrivate: value.isPrivate === true ? false : true });
  };
  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(postWriting(value));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={value.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
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
        <Form.Group controlId="exampleForm.ControlSelect1">
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
        <UploadImage />
        <ImagePreview />
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
