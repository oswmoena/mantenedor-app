import { createStyles, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "8% 12%",
    },
    title: {
      padding: "3% 5%",
    },
  })
);

export const ListTasks = () => {
  const classes = useStyles();
  return (
    <Paper variant="outlined">
      <div className={classes.title}>
        <Typography variant="h4" component="h4">
          {"Lista de Tareas"}
        </Typography>
      </div>
      <div className={classes.container}>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Paper>
  );
};

const data = [
  {
    title: "Titulo 1",
    description: "Este es un texto de ejemplod e una tarea",
  },
  {
    title: "Titulo 2",
    description: "Este es un texto de ejemplod e una tarea",
  },
  {
    title: "Titulo 3",
    description: "Este es un texto de ejemplod e una tarea",
  },
];
