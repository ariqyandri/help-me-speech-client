import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
    </form>
  );
}
