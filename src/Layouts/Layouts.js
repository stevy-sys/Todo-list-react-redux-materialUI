import React from "react";
import TodoHeader from "../Components/TodoHeader";
import TodoFooter from "../Components/TodoFooter";
import { Grid } from "@material-ui/core";

const Layouts = ({ children }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <TodoHeader />
        {children}
        <TodoFooter />
      </Grid>
    </>
  );
};

export default Layouts;
