import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { counterContext } from "../../contexts/counterContext";

const Counter = () => {
  const { counter, decrement, increment } = useContext(counterContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton onClick={() => decrement()} aria-label="delete" color="error">
        <RemoveIcon />
      </IconButton>
      <span>{counter}</span>
      <IconButton
        onClick={() => increment()}
        aria-label="delete"
        color="secondary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
