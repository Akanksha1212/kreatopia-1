import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

import HomePage from './pages/HomePage.jsx';
import TestPage from './pages/TestPage.jsx';
import SecretPage from './pages/SecretPage.jsx';
import ComicList from './pages/ComicList';
import ComicDetail from './pages/ComicDetail';
import ReadChapter from './pages/ReadChapter';
import CreatorDashboard from './pages/CreatorDashboard';
// import ErrorPage from './pages/ErrorPage.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.authenticated)
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}/>
    )}/>
  );
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={CreatorDashboard} />
            <Route exact path="/comic" component={ComicList} />
            <Route path="/comic/:ComicId/:ChapterId" component={ReadChapter} />
            <Route path="/comic/:ComicId/" component={ComicDetail} />
            <Route path="/test" component={TestPage} />
            <PrivateRoute path="/secret" component={SecretPage} />
            {/* <Route path="*" component={ErrorPage} /> */}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
