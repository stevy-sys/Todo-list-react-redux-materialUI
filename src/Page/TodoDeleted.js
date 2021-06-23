import React from "react";
import Layouts from "../Layouts/Layouts";
//import Popup from "../Components/Popup";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import Todo from "../Components/Todo";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 500,
    height: 450,
    backgroundColor: "pink",
  },
}));
const TodoDeleted = ({ todos }) => {

  const classes = useStyles();
  return (
    <>
      <Layouts>
        <Box component="h3">Todo Supprimer</Box>
        <Box>
          <GridList cellHeight={160} className={classes.gridList} cols={1}>
            <List className={classes.root}>
              {todos.map((element) => {
                return <Todo type="delete" todo={element} />;
              })}
            </List>
          </GridList>
        </Box>
      </Layouts>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    todos: state.todosSupprimer,
  };
};

export default connect(mapStateToProps)(TodoDeleted);
