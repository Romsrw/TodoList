import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  inputStyle: {},
  buttonStyle: {
    marginLeft: theme.spacing(2),
  },
}));

const ToDoForm = () => {
  const { todos } = useSelector((state) => state);

  const classes = useStyles();

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    dispatch(addTaskAction(inputText));
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  
  const disableSubmit =
    !inputText ||
    inputText.length < 4 ||
    todos.some((todo) => todo.text === inputText);

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Введите задачу..."
        variant="outlined"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className={classes.inputStyle}
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={disableSubmit}
        className={classes.buttonStyle}
        size="small"
      >
        Сохранить
      </Button>
    </div>
  );
};

export default ToDoForm;
