import React, { Component } from 'react'
import Navbar from './shared/NavBar';
import { connect } from "react-redux";
import { $ } from 'react-jquery-plugin'
import { answerQuestion } from './../redux/actions/actions'

class AnswerQuestion extends Component {
    constructor(props) {
        console.log("Props",props)
        super(props)
    }
    submitAnswer() {
        const authedUser = localStorage.getItem("logged_user");
        const qid = this.props.question.id;
        const answer = $("input[type='radio'][name='rather_options']:checked").val();
        this.props.answerQuestion({ authedUser, qid, answer });
    }
    render() {
        const question = this.props.question;
        return (

            <div>
                <Navbar />
                <div className="container">
                    <div className="card-container answer-container">

                        <div className="card-header" style={{ backgroundColor: 'lightgray', color: 'black' }}>

                            <h2>
                                {this.props.users.filter(u => u.id === question.author)[0].name} asks:
                </h2>

                        </div>

                        <div className="card-content answer-content">
                            <div className="info-card">

                                <img className="card-img-top" src={this.props.users.filter(u => u.id === question.author)[0].avatarURL} alt="Author Avatar" style={{ width: '30%', height: '30%', borderRadius: '25px' }} />

                                <div className="card-body ">

                                    <h4 className="card-title ">Would you rather</h4>

                                    <div className="radio-options">

                                        <input type="radio" name="rather_options" value="optionOne" /> {question.optionOne.text}

                                    </div>

                                    <div className="radio-options">

                                        <input type="radio" name="rather_options" value="optionTwo" /> {question.optionTwo.text}


                                    </div>

                                    <button className="btn submit-post" onClick={() => this.submitAnswer(question)} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

// export default AnswerQuestion

// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state\n`, state);

    return {
        question: state.QuestionReducer.question,
        users: state.UserReducer.users
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    answerQuestion  
};


const container = connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
export default container;