import { GET_TASKS, UPDATE_TASKS, REMOVE_TASK, ADD_TASK, FILL_TASKS, SELECT_TASK, REMOVE_SELECT_TASK } from '../Actions/types'
import { dummy } from '../constans/dummy'

const INITIAL_SATATE = {
	tasks: [],
	taskToEdit: {},
	taskToEditValidation: false,
}

// eslint-disable-next-line
export default (state = INITIAL_SATATE, action) => {
	switch (action.type) {
		case FILL_TASKS:
			return {
				...state,
				tasks: [...dummy],
			}
		case GET_TASKS:
			return {
				...state,
			}
		case UPDATE_TASKS:
			return {
				...state,
				tasks: [...state.tasks.filter((item) => item.id !== action.payload.id), action.payload],
			}
		case REMOVE_TASK:
			return {
				...state,
				tasks: [
					{
						...state.tasks.find((item) => item.id === action.payload),
						enabled: false,
					},
					...state.tasks.filter((item) => item.id !== action.payload),
				],
			}
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			}
		case SELECT_TASK:
			return {
				...state,
				taskToEdit: action.payload,
				taskToEditValidation: true,
			}
		case REMOVE_SELECT_TASK:
			return {
				...state,
				taskToEdit: INITIAL_SATATE.taskToEdit,
				taskToEditValidation: false,
			}
		default:
			return state
	}
}
