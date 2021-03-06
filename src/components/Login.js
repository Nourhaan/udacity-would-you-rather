import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {login,fetchData,seeResult} from './../redux/actions/actions'
// import {answerQuestion , addQuestion,fetchData} from '../redux/actions/actions'

class Login extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    login(user){
        this.props.login(user);
         localStorage.setItem('logged_user', user);
         const pathname = this.props.path.split('/');
         const question_id = pathname[pathname.length-1]
         const question = this.props.questions.filter(q=>q.id===question_id)[0];
         this.props.seeResult(question)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
                                <h1>Login</h1>
                                <select ref={(u) => this.user = u}>
                                    {
                                        this.props.users.map((user) => (
                                            <option key={user.id} value={user.id} className="user-option">{user.name}</option>
                                        ))
                                    }
                                </select>
                                {/* <input type="submit" name="" value="Login" href="#" /> */}
                                <Link onClick={() =>{ this.login(this.user.value)}} id="login-btn" to='/dashboard' >Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Login
// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state`, state);
      return {
          users : state.UserReducer.users,
          currentUser : state.UserReducer.currentUser,
          questions:state.QuestionReducer.questions,
          path:state.UserReducer.path
      };
  };
  
  // // include actions in the component as props
  const mapDispatchToProps = {
      fetchData,
      login,
      seeResult
  };
  const container = connect(mapStateToProps, mapDispatchToProps)(Login); 
  export default container;
