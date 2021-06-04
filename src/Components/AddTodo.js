import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
      textDecoration: "none",
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
        <Link to="/">
          <Button
            onClick={() => addTodo(newTodo)}
            variant="contained"
            color="secondary"
          >
            Ajouter
          </Button>
        </Link>
      </div>
    </div>
  );
}
