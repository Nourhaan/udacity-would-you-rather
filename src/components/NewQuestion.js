import React, { Component } from 'react'
import Navbar from './shared/NavBar';
import { postQuestion } from './../redux/actions/actions'
import { connect } from "react-redux";

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    nextPath(path) {
        this.props.history.push(path);
    }

    onSubmit() {
        const optionOneText = this.option1.value;
        const optionTwoText = this.option2.value;
        const author = localStorage.getItem("logged_user");
        const question = { optionOneText, optionTwoText, author };
        this.props.postQuestion(question);
        this.nextPath('/dashboard')
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="card new-question-card">

                    <div className="card-header">
                        <h4 className="card-title">Create New Question</h4>
                    </div>

                    <div className="card-body new-body">

                        <h5 className="card-title">Complete The Question</h5>

                        <b className="card-title">Would you rather ...</b>

                        <input type="text" className="form-control" ref={(c) => this.option1 = c} />

                        <h2>OR</h2>

                        <input type="text" className="form-control" ref={(c) => this.option2 = c} />

                        <button className="btn new-question-btn" onClick={this.onSubmit}>Submit</button>

                    </div>

                </div>
            </div>
        )
    }
}

// export default NewQuestion

// include state in the component as props
const mapStateToProps = (state) => {
    return {
        question: state.QuestionReducer.question,
        questions: state.QuestionReducer.questions,
        unanswerQuestions: state.QuestionReducer.unanswerQuestions
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    postQuestion,
};
const container = connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
export default container;


