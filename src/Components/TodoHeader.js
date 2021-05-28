import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "pink",
  },
});

function LabelBottomNavigation({ todos }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  let nbrAchever = 0;
  todos.map((element) => {
    if (element.achever === true) {
      nbrAchever++;
    }
  });
  console.log(nbrAchever);
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
            icon={
              <Badge
                badgeContent={nbrAchever}
                color={nbrAchever > 0 ? "secondary" : ""}
              >
                <FavoriteIcon color={nbrAchever > 0 ? "primary" : ""} />
              </Badge>
            }
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(LabelBottomNavigation);
