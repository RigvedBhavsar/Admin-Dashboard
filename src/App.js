import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Sidenav from './components/Sidenav/Sidenav.jsx';
import Home from './pages/Home/Home.jsx';
import Userlist from './pages/Userlist/Userlist.jsx';
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import './App.css';

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Sidenav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/users">
						<Userlist />
					</Route>
					<Route path="/user/:userId">
						<User />
					</Route>
					<Route path="/newUser">
						<NewUser />
					</Route>
					{/* <Route path="/products">
						<ProductList />
					</Route> */}
					{/* <Route path="/product/:productId">
						<Product />
					</Route> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
