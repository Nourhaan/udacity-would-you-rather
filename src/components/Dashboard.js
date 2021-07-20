import React, { Component } from 'react'
import Navbar from './shared/NavBar';
import Question from './Question'
import { connect } from "react-redux";
import { fetchQuestions, changeListType, clearPath,seeResult } from './../redux/actions/actions'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        if (props.path !== '') {
            this.props.history.push(props.path);
            this.props.clearPath(); // to prevent not going to dashboard 
        }
        this.changeListType('unanswered')
    }
    componentDidMount() {
        this.props.fetchQuestions()
        const pathname = window.location.pathname.split('/');
        const question_id = pathname[pathname.length-1]
        const question = this.props.questions.filter(q=>q.id===question_id)[0];
        this.props.seeResult(question)
    }
    changeListType(listType) {
        this.props.changeListType(listType);
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container dashboard-container">
                    <ul className="nav nav-tabs">
                        <li className="active" onClick={() => { this.changeListType('unanswered') }}>
                            <a className="tab-anchor" data-toggle="tab" href="#unAns">Unanswered Questions</a>
                        </li>
                        <li onClick={() => { this.changeListType('answered') }}>
                            <a className="tab-anchor" data-toggle="tab" href="#ans">Answered Questions</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="unAns" className="tab-pane active">
                            <Question questionsToShow={this.props.unanswerQuestions} />
                        </div>
                        <div id="ans" className="tab-pane">
                            <Question questionsToShow={this.props.answerQuestions} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default Dashboard

// include state in the component as props
const mapStateToProps = (state) => {
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
    fetchQuestions,
    changeListType,
    clearPath,seeResult
};
const container = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default container;

