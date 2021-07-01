import React, { useState } from 'react'

import { Grid, makeStyles, createStyles, ListItemIcon, MenuItem, MenuList, Paper, Typography, Box } from '@material-ui/core'

import { AddTask } from '../Components/AddTask'
import { ListTasks } from '../Components/ListTasks'

import { Add } from '@material-ui/icons'
import ListIcon from '@material-ui/icons/List'

import { dummy } from '../Store/dummy'

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			padding: '2% 3% 2% 1%',
		},
		selectedItem: {
			backgroundColor: '#EFF1F3',
		},
		contentSelected: {
			borderRadius: '4px',
			height: 'calc(100vh - 160px)',
			overflow: 'auto',
		},
	})
)

const INIT_MENU = {
	addTask: false,
	listTask: false,
}

export const Home = () => {
	const classes = useStyles()
	const [componentSelected, setComponentSelected] = useState(0)
	const [menuItem, setMenuItem] = useState(INIT_MENU)
	const [taskToUpdate, setTaskToUpdate] = useState(null)
	const [data, setData] = useState(dummy)

	const handleSelectItem = (value) => {
		setMenuItem({
			...INIT_MENU,
			[value]: true,
		})
	}

	const renderComponentSelected = (value) => {
		switch (value) {
			case 0:
				return null
			case 1:
				return <AddTask taskToUpdate={taskToUpdate} data={data} setData={setData} handleSelectItem={handleSelectItem} setComponentSelected={setComponentSelected} />
			case 2:
				return <ListTasks data={data} setData={setData} setTaskToUpdate={setTaskToUpdate} handleSelectItem={handleSelectItem} setComponentSelected={setComponentSelected} />
			default:
				return null
		}
	}

	return (
		<div className={classes.container}>
			<Grid container spacing={3}>
				<Grid item md={3} xs={12}>
					<Paper>
						<MenuList>
							<MenuItem
								className={menuItem.addTask ? classes.selectedItem : ''}
								onClick={() => {
									handleSelectItem('addTask')
									setComponentSelected(1)
								}}
							>
								<ListItemIcon>
									<Add />
								</ListItemIcon>
								<Typography>{'Agregar Tarea'}</Typography>
							</MenuItem>
							<MenuItem
								className={menuItem.listTask ? classes.selectedItem : ''}
								onClick={() => {
									handleSelectItem('listTask')
									setComponentSelected(2)
								}}
							>
								<ListItemIcon>
									<ListIcon />
								</ListItemIcon>
								<Typography>{'Listar Tareas'}</Typography>
							</MenuItem>
						</MenuList>
					</Paper>
				</Grid>
				<Grid item md={9} xs={12}>
					<Box className={classes.contentSelected}>{renderComponentSelected(componentSelected)}</Box>
				</Grid>
			</Grid>
		</div>
	)
}
