import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "pink",
    textAlign: "center",
    display: "flex",
    width: 500,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TodoFooter() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={1}>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  5
                </Typography>
                <Typography variant="body2" component="p">
                  todos
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  5
                </Typography>
                <Typography variant="body2" component="p">
                  achever
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  5
                </Typography>
                <Typography variant="body2" component="p">
                  supprimer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
