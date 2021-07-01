import { GET_TASKS, UPDATE_TASKS, REMOVE_TASK, ADD_TASK, FILL_TASKS, SELECT_TASK, REMOVE_SELECT_TASK } from './types'

export const fill_tasks = () => ({
	type: FILL_TASKS,
})

export const get_tasks = () => ({
	type: GET_TASKS,
})

export const update_tasks = (payload) => ({
	type: UPDATE_TASKS,
	payload,
})

export const remove_task = (payload) => ({
	type: REMOVE_TASK,
	payload,
})

export const add_task = (payload) => ({
	type: ADD_TASK,
	payload,
})

export const select_task = (payload) => ({
	type: SELECT_TASK,
	payload,
})

export const remove_select_task = () => ({
	type: REMOVE_SELECT_TASK,
})

export const fillTasks = () => {
	return (dispatch) => {
		dispatch(fill_tasks())
	}
}

export const getTasks = () => {
	return (dispatch) => {
		dispatch(get_tasks())
	}
}

export const updateTasks = (task) => {
	return (dispatch) => {
		dispatch(update_tasks(task))
	}
}

export const removeTask = (id) => {
	return (dispatch) => {
		dispatch(remove_task(id))
	}
}

export const addTask = (task) => {
	return (dispatch) => {
		dispatch(add_task(task))
	}
}

export const selectTask = (task) => {
	return (dispatch) => {
		dispatch(select_task(task))
	}
}

export const removeSelectTask = () => {
	return (dispatch) => {
		dispatch(remove_select_task())
	}
}
