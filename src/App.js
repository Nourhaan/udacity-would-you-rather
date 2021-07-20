
import './App.css';
import Login from './components/Login';
import UserCard from './components/UserCard';
import NewQuestion from './components/NewQuestion';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ShouldLogin from './components/ShouldLogin';
import QuestionDetails from './components/QuestionDetails';

//  Support for future - Not used 
//  https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router

function App(props) {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/questions/:question_id" exact component={QuestionDetails} />
          <Redirect exact from="/" to="login" />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
        
          <PublicRoute path="/should-login" component={ShouldLogin} />
          <PrivateRoute path="/add" exact component={NewQuestion} />
          <PrivateRoute path="/leaderboard" exact component={UserCard} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
