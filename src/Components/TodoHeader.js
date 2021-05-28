import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "pink",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to="/">
          {" "}
          <BottomNavigationAction
            label="Recent"
            value="recent"
            icon={<ListAltIcon />}
          />
        </Link>
        <Link to="/addtodo">
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<AddIcon />}
          />
        </Link>
        <Link to="/todo-achever">
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
        </Link>

        <Link to="/todo-deleted">
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<DeleteIcon />}
          />
        </Link>
      </BottomNavigation>
    </div>
  );
}
