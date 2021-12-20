import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route, BrowserRouter, HashRouter, Redirect } from 'react-router-dom';

import { withRouter } from 'react-router';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";

import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));




class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return (
				<div>
					<Preloader />
					<a>Loading</a>
				</div>)
		};

		return (
			<div className='app-wrapper' >
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Switch>
						<Route exact path='/' render={() => <Redirect to={"/profile"} />} />
						<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
						<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
						<Route path='/users' render={withSuspense(UsersContainer)} />
						<Route path='/login' render={withSuspense(Login)} />
						<Route path='*' render={() => <div>404 NOT FOUND</div>} />
					</Switch>
				</div>
			</div>
		);
	}
};


const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJsApp = (props) => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
};

export default SamuraiJsApp;