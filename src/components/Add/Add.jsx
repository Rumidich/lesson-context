import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";

const Add = () => {
  const { createTodo } = useContext(todoContext);
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    navigate("/list"); // перекидывает на лист после добавления нового todo
    console.log(newTodo);
  }
  return (
    <Box>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="Outlined"
        variant="outlined"
      />
      <Button
        onClick={() => handleSave()}
        variant="contained"
        color="secondary">
        Add
      </Button>
    </Box>
  );
};

export default Add;
