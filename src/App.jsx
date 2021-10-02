import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Ventas from 'pages/auth/Ventas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
	return (
		<div className='App'>
			<Router>
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/registro'>
							<Registro />
						</Route>
						<Route path='/ventas'>
							<Ventas />
						</Route>
					</Switch>
				</Router>
		</div>
	);
}

export default App;