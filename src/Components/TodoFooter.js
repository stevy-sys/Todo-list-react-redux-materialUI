import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "pink",
    display: "flex",
    textAlign: "center",
    //justifyContent: "space-beetwen",
    width: 500,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodoFooter = ({ todos ,todosDelete }) => {
  //todosSupprimer(todosDelete);
  let tout = todos.length + todosDelete.length;
  let supprimer = parseInt(todosDelete.length);
  let achever = 0;

  todos.map(todo => {
    if (todo.achever === true) {
      achever++;
    }
  })

  const classes = useStyles();

  return (
    <>
      <Box>
        <Grid justify="space-between" className={classes.root} container spacing={1}>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {tout}
                </Typography>
                <Typography variant="body2" component="p">
                  Toute les todos
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {achever}
                </Typography>
                <Typography variant="body2" component="p">
                  Todo achever
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {supprimer}
                </Typography>
                <Typography variant="body2" component="p">
                  Todo supprimer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todosDelete:state.todosSupprimer
  };
};

export default connect(mapStateToProps)(TodoFooter);