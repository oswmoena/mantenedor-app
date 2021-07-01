import React, { useState } from 'react'
import { createStyles, makeStyles, Paper, Typography, Button, Card, CardContent, CardActions, Grid } from '@material-ui/core'

import 'date-fns'
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

export const ListTasks = ({ data, setData, setComponentSelected, handleSelectItem, setTaskToUpdate }) => {
	const classes = useStyles()

	const [dataToList, setDataToList] = useState(data)

	const formatDate = (date) => {
		return format(date, 'dd-MM-yyyy').toString()
	}
	const formatHour = (date) => {
		return format(date, 'HH:mm').toString()
	}

	const handleRemoveTask = (id) => {
		// eslint-disable-next-line
		data.map((task) => {
			if (task.id === id) {
				task.enabled = false
			}
		})
		setData(data)
		setDataToList(dataToList.filter((item) => item.id !== id))
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
					{dataToList.map(
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
					)}
				</Grid>
			</div>
		</Paper>
	)
}
