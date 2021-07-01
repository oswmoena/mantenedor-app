import React, { useEffect } from 'react'
import { createStyles, makeStyles, TextField, Grid, Paper, Button, Typography } from '@material-ui/core'
import { useFormik, FormikProvider, Form, ErrorMessage } from 'formik'

import { addTaskSchema } from '../Validations/addTask'

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			padding: '8% 12%',
		},
		title: {
			padding: '3% 5%',
		},
		buttonAdd: {
			paddingRight: '1%',
			textAlign: 'right',
		},
		buttonClear: {
			paddingLeft: '1%',
			textAlign: 'left',
		},
		error: {
			color: 'red',
		},
	})
)

export const AddTask = ({ taskToUpdate, data, setData }) => {
	const classes = useStyles()

	const handleSubmit = (values) => {
		console.log(`values`, values)
		let last_id = data[data.length - 1]['id']
		let newArr = data
		newArr.push({
			id: last_id + 1,
			title: values.title,
			description: values.description,
		})
		console.log(`newArr`, newArr)
		setData(newArr)
    formik.resetForm()
    alert("Agregado con éxito")
	}

	const handleUpdate = (values) => {
		console.log(`values`, values)
	}

	useEffect(() => {
		if (taskToUpdate) {
			formik.setFieldValue('title', taskToUpdate.title)
			formik.setFieldValue('description', taskToUpdate.description)
		}
	}, [taskToUpdate])

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},
		validationSchema: addTaskSchema,
		onSubmit: (values) => {
			taskToUpdate ? handleUpdate(values) : handleSubmit(values)
		},
	})

	return (
		<FormikProvider value={formik}>
			<Paper variant="outlined">
				<div className={classes.title}>
					<Typography variant="h4" component="h4">
						{'Ingreso de Tareas'}
					</Typography>
				</div>
				<div className={classes.container}>
					<Form onSubmit={formik.handleSubmit} autoComplete="off">
						<Grid container spacing={2} justify="center">
							<Grid item md={6} xs={12}>
								<TextField
									id="title"
									name="title"
									onChange={formik.handleChange}
									value={formik.values.title}
									variant="outlined"
									placeholder={'Escriba el título de la tarea'}
									helperText={
										<ErrorMessage
											name="title"
											render={(msg) => (
												<Typography variant="caption" className={classes.error}>
													{msg}
												</Typography>
											)}
										/>
									}
									fullWidth
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									id="description"
									name="description"
									onChange={formik.handleChange}
									value={formik.values.description}
									variant="outlined"
									placeholder={'Escriba una descripción para la tarea'}
									fullWidth
									helperText={
										<ErrorMessage
											name="description"
											render={(msg) => (
												<Typography variant="caption" className={classes.error}>
													{msg}
												</Typography>
											)}
										/>
									}
								/>
							</Grid>
						</Grid>
						<Grid container spacing={3} justify="center">
							<Grid item md={6} xs={12} className={classes.buttonAdd}>
								<Button variant="contained" color="primary" type="submit">
									{'Agregar'}
								</Button>
							</Grid>
							<Grid item md={6} xs={12} className={classes.buttonClear}>
								<Button variant="contained" onClick={() => formik.handleReset()} color="secondary">
									{'Limpiar Campos'}
								</Button>
							</Grid>
						</Grid>
					</Form>
				</div>
			</Paper>
		</FormikProvider>
	)
}
