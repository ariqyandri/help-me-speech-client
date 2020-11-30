import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Writing } from "./types";
import { Button, MenuItem, Select } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { postWriting } from "../../store/writing/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function CreateWriting() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState<Writing>({
    title: "",
    content: "",
    imageUrl: null,
    videoUrl: null,
    categoryId: 1,
  });

  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    dispatch(postWriting(value));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="title"
          name="title"
          multiline
          rows={4}
          value={value.title}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="content"
          name="content"
          multiline
          rows={4}
          value={value.content}
          onChange={handleChange}
          variant="outlined"
        />
        <Select
          label="category"
          name="categoryId"
          value={value.categoryId}
          onChange={handleChange}
        >
          <MenuItem value={1}>
            <em>Speech</em>
          </MenuItem>
          <MenuItem value={2}>Presentation</MenuItem>
          <MenuItem value={3}>Interview</MenuItem>
          <MenuItem value={4}>Poem</MenuItem>
          <MenuItem value={5}>Play</MenuItem>
          <MenuItem value={6}>Blog</MenuItem>
        </Select>
      </div>
      <Button onClick={handleClick}>Submit</Button>
    </form>
  );
}
