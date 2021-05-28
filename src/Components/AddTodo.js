import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  button: {
    "& > *": {
      margin: theme.spacing(6.5),
    },
  },
}));

export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState([]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Entrez un Todo"
          style={{ margin: 50 }}
          placeholder="ex : ballader"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <br />
      <div className={classes.button}>
        <Button
          onClick={() => addTodo(newTodo)}
          variant="contained"
          color="secondary"
        >
          Ajouter
        </Button>
      </div>
    </div>
  );
}
