import { Home } from './Views/Home'
import { persistor, store } from './Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Home />
			</PersistGate>
		</Provider>
	)
}

export default App
