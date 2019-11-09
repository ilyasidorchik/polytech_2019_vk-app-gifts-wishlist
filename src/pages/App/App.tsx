import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import Search from '../Search';
import UserPage from '../UserPage';
import FriendPage from '../FriendPage';
import FriendsList from '../FriendsList';
import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" component={Search} exact />
					<Route path="/profile" component={UserPage} />
					<Route path="/friend-page" component={FriendPage} />
					<Route path="/friends" component={FriendsList} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
