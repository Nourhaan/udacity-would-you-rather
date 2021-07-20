import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { setPath ,fetchQuestions} from './../redux/actions/actions'

class ShouldLogin extends Component {
    constructor(props) {
        super(props)
        this.props.setPath(window.location.pathname);
    }
    keep_state(){
        localStorage.setItem('logged_user', "");
        this.props.fetchQuestions();
    }
    
    render(){
        return (
            <div className="parent-should-login">
            <div className="should-login">
            <h3>Should Login</h3>
        <Link className="nav-link" onClick={() =>this.keep_state() } to='/login'>Go to Login</Link>
            </div>
            </div>
        )
    }
    
}
// export default ShouldLogin;

// include state in the component as props
const mapStateToProps = (state) => {
    console.log(state)
    return {
        answerQuestions: state.QuestionReducer.answerQuestions,
        unanswerQuestions: state.QuestionReducer.unanswerQuestions,
        listType: state.QuestionReducer.listType,
        question: state.QuestionReducer.question,
        questions: state.QuestionReducer.questions,
        path: state.UserReducer.path


    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    setPath,
    fetchQuestions,
};
const container = connect(mapStateToProps, mapDispatchToProps)(ShouldLogin);
export default container;


