import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from '../Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
	key: 'root',
	whitelist: ['authentication'],
	storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)
