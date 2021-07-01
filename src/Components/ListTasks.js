import { createStyles, makeStyles, Paper, Typography, Button, Card, CardContent, CardActions, Grid } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			padding: '3% 5%',
		},
		title: {
			padding: '3% 5%',
		},
		card: {
			maxWidth: 400,
		},
		borderCard: {
			padding: '1%',
		},
	})
)

export const ListTasks = ({ data, setData, setComponentSelected, handleSelectItem, setTaskToUpdate }) => {
	const classes = useStyles()

	const handleRemoveTask = (id) => {
		setData(data.filter((item) => item.id !== id))
	}

	const handleUpdate = (task) => {
    handleSelectItem('addTask')
    setComponentSelected(1)
		setTaskToUpdate(task)
	}

	return (
		<Paper variant="outlined">
			<div className={classes.title}>
				<Typography variant="h4" component="h4">
					{'Lista de Tareas'}
				</Typography>
			</div>
			<div className={classes.container}>
				<Grid container spacing={2}>
					{data.map((task, index) => (
						<Grid item key={index} className={classes.borderCard} md={3} xs={12}>
							<Card className={classes.card}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{task.title}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										{task.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button color="primary" variant="contained" onClick={() => handleUpdate(task)}>
										Editar
									</Button>
									<Button color="secondary" variant="contained" onClick={() => handleRemoveTask(task.id)}>
										Eliminar
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</Paper>
	)
}
