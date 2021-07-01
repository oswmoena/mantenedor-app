import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Paper, Typography, Button, Card, CardContent, CardActions, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../Selectors'

import 'date-fns'
import { getTasks, removeTask, selectTask } from '../Actions/tasks'
const { format } = require('date-fns')

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
		dateCard: {
			paddingTop: '10%',
			color: 'grey',
		},
	})
)

export const ListTasks = ({ setComponentSelected, handleSelectItem }) => {
	const classes = useStyles()

	const dispatch = useDispatch()

	const taskData = useSelector(tasks)

	const [dataToList, setDataToList] = useState([])

	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch])

	useEffect(() => {
		setDataToList(taskData)
	}, [taskData])

	const formatDate = (date) => {
		return format(date, 'dd-MM-yyyy').toString()
	}
	const formatHour = (date) => {
		return format(date, 'HH:mm').toString()
	}

	const handleRemoveTask = (id) => {
		dispatch(removeTask(id))
	}

	const handleUpdate = (task) => {
		dispatch(selectTask(task))
		handleSelectItem('addTask')
		setComponentSelected(1)
		// setTaskToUpdate(task)
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
					{dataToList.length > 0 ? (
						dataToList.map(
							(task, index) =>
								task &&
								task.enabled && (
									<Grid item key={index} className={classes.borderCard} md={3} xs={12}>
										<Card className={classes.card}>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													{task.title}
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													{task.description}
												</Typography>
												<Typography variant="caption" display="block" className={classes.dateCard}>
													{formatDate(new Date(task.created_at))}
												</Typography>
												<Typography variant="caption" display="block" style={{ color: 'grey' }}>
													{formatHour(new Date(task.created_at)) + ' hrs'}
												</Typography>
											</CardContent>
											<CardActions>
												<Button color="primary" variant="contained" onClick={() => handleUpdate(task)}>
													{'Editar'}
												</Button>
												<Button color="secondary" variant="contained" onClick={() => handleRemoveTask(task.id)}>
													{'Eliminar'}
												</Button>
											</CardActions>
										</Card>
									</Grid>
								)
						)
					) : (
						<Typography gutterBottom variant="h5" component="h2">
							{'Sin Datos'}
						</Typography>
					)}
				</Grid>
			</div>
		</Paper>
	)
}
