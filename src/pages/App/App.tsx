import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Search from '../Search';
import MyPage from '../MyPage';
import FriendPage from '../FriendPage';
import FriendsList from '../FriendsList';
import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Search} exact />
					<Route path="/my-page" component={MyPage} />
					<Route path="/friend-page" component={FriendPage} />
					<Route path="/friends-list" component={FriendsList} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
