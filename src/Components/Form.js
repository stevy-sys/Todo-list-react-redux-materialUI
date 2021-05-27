import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields({ todo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(todo.todo);

  const handleChange = (event) => {
    //console.log(event.target.value);
    setValue(event.target.value);
  };

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          multiline
          value={value}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
}
