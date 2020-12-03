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
  const [validated, setValidated] = useState(false);
  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleIsPrivate = (event: any) => {
    setValue({ ...value, isPrivate: value.isPrivate === true ? false : true });
  };
  const handleClick = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (value.title !== "" && value.content !== "" && value.categoryId !== 0) {
      dispatch(postWriting(value));
    }
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleClick}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={value.title}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            type="text"
            rows={3}
            value={value.content}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a text.
          </Form.Control.Feedback>
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
            <option value="">Choose a category</option>
            {categories.map((category: Category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please choose a category.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            name="isPrivate"
            id={`default-checkbox`}
            label={`Private`}
            isValid={true}
            feedback={
              value.isPrivate === true
                ? `Your writing is PRIVATE.`
                : `Your writing is PUBLIC.`
            }
            checked={value.isPrivate}
            onChange={handleIsPrivate}
          />
        </Form.Group>
        <UploadImage />
        <ImagePreview />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
