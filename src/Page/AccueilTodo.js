import React from "react";
import Layouts from "../Layouts/Layouts";
import Application from "../Layouts/Application";

const AccueilTodo = ({ todo }) => {
  console.log(todo);
  return (
    <>
      <Layouts>
        <Application />
      </Layouts>
    </>
  );
};

export default AccueilTodo;
