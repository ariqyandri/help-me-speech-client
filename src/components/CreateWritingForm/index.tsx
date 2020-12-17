import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";
import { removeAllImage } from "../../store/images/action";
import { postWriting } from "../../store/myWriting/action";
import ImagePreview from "../ImagePreview";
import UploadImage from "../UploadImage";
import { Writing, Category } from "./types";
import "./CreateWritingForm.css";
import DisplayImage from "../DisplayImage";
import { selectImages } from "../../store/images/selector";

export default function CreateWritingForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeAllImage());
  }, [dispatch]);
  const images = useSelector(selectImages);
  const categories = useSelector(selectCategories);
  const [value, setValue] = useState<Writing>({
    title: "",
    content: "",
    isPrivate: false,
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
      <Form
        noValidate
        validated={validated}
        onSubmit={handleClick}
        className="form"
      >
        <Form.Group className="formTitle">
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
        {images[0].id === 0 ? null : (
          <div>
            <Form.Label>Images</Form.Label>
            <DisplayImage images={images} />
          </div>
        )}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            type="text"
            rows={15}
            value={value.content}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a text.
          </Form.Control.Feedback>
        </Form.Group>
        <UploadImage />
        <ImagePreview />
        <ButtonGroup toggle className="filterButtons">
          <ToggleButton
            type="radio"
            variant="outline-dark"
            value={true}
            checked={!value.isPrivate}
            onChange={handleIsPrivate}
          >
            Public
          </ToggleButton>{" "}
          <ToggleButton
            type="radio"
            variant="outline-dark"
            value={false}
            checked={value.isPrivate}
            onChange={handleIsPrivate}
          >
            Private
          </ToggleButton>
        </ButtonGroup>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
