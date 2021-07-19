
import './App.css';
import Login from './components/Login';
import UserCard from './components/UserCard';
import NewQuestion from './components/NewQuestion';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { BrowserRouter,Switch,Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import QuestionDetails from './components/QuestionDetails';


function App(props) {
  
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <PublicRoute path="/login"  component={Login} />
          <Redirect exact from="/" to="login"/>
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/questions/:question_id" exact component={QuestionDetails} />
          <PrivateRoute path="/add" exact component={NewQuestion} />
          <PrivateRoute path="/leaderboard" exact component={UserCard} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
