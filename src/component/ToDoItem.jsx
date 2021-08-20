import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { removeTaskAction } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  removeButton: {
    marginLeft: theme.spacing(2),
  },
  complited: {
    textDecoration: "line-through",
  },
}));

const ToDoItem = ({ text, index, id }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    dispatch(removeTaskAction(id));
    setOpen(false);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography className={clsx(checked && classes.complited)}>
        {`${index + 1}. ${text}`}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        size="small"
        className={classes.removeButton}
      >
        Удалить
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Хотите удалить задачу?
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleOk} color="primary">
            Да
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ToDoItem;
