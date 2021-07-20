import React from 'react'
import Navbar from './shared/NavBar';
import { connect } from "react-redux";
import { seeResult } from './../redux/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea } from '@fortawesome/free-solid-svg-icons'

function QuestionResult(props) {
    const { question } = props;
    const optionOneSelected = props.answerQuestions.filter(q => q.id === props.question.id &&
        props.question.optionOne.votes.includes(localStorage.getItem("logged_user")))[0]

    const optionTwoSelected = props.answerQuestions.filter(q => q.id === props.question.id &&
        props.question.optionTwo.votes.includes(localStorage.getItem("logged_user")))[0]

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneRatio = question.optionOne.votes.length / totalVotes * 100;
    const optionTwoRatio = question.optionTwo.votes.length / totalVotes * 100;
    return (
        <div>
            <Navbar />
            <div className="container result-container">
                <div className="card-container">
                    <div className="card-header" style={{ backgroundColor: 'grey', color: 'black' }}>
                        <h2>{props.users.filter(u => u.id === question.author)[0].name} asks: </h2>
                    </div>
                    <div className="card-content" style={{ backgroundColor: 'black', color: 'white' }}>
                        <div className="info-card" style={{ width: '650px', JustifyContent: 'space-evenly' }}>
                            <img className="card-img-top" src={props.users.filter(u => u.id === question.author)[0].avatarURL} alt="Author Avatar"
                                style={{ width: '30%', height: '30%', BorderRadius: '25px' }} />
                            <div>
                                <h3 className="card-title" style={{ marginTop: '20px' }}>Results</h3>
                                <div className="card-progress ">
                                    <div className="card bg-light mb-3" style={{ MaxWidth: '18rem' }}>
                                        <div className="card-progress" style={{ backgroundColor: 'gray' }}>
                                            <div className="voted-question">
                                                <p className="card-text ">
                                                    Would you rather to {question.optionOne.text}
                                                </p>
                                                {
                                                    optionOneSelected
                                                    && <FontAwesomeIcon icon={faVoteYea} />}


                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: optionOneRatio + '%' }} aria-valuenow={optionOneRatio} aria-valuemin="0" aria-valuemax="100"></div>
                                                {/* <!-- style="width: 25%" aria-valuenow="25" --> */}
                                            </div>
                                            <p style={{ textAlign: 'center', paddingTop: '10px' }}>{question.optionOne.votes.length} out of {totalVotes}</p>
                                            <p style={{ textAlign: 'center', paddingTop: '10px' }}>Percentage: {Math.round(optionOneRatio * 100) / 100} %</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="card-progress ">
                                    <div className="card bg-light mb-3" style={{ MaxWidth: '18rem' }}>
                                        <div className="card-progress" style={{ backgroundColor: 'gray' }}>
                                            <div className="voted-question">
                                                <p className="card-text ">
                                                    Would you rather to {question.optionTwo.text}
                                                </p>
                                                {
                                                    optionTwoSelected
                                                    && <FontAwesomeIcon icon={faVoteYea} />}
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: optionTwoRatio + '%' }} aria-valuenow={optionTwoRatio} aria-valuemin="0" aria-valuemax="100"></div>
                                                {/* <!-- style="width: 25%" aria-valuenow="25" --> */}
                                            </div>
                                            <p style={{ textAlign: 'center', paddingTop: '10px' }}>{question.optionTwo.votes.length} out of {totalVotes} votes</p>
                                            <p style={{ textAlign: 'center', paddingTop: '10px' }}> Percentage: {Math.round(optionTwoRatio * 100) / 100}  %</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// export default QuestionResult

// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state`, state);

    return {
        question: state.QuestionReducer.question,
        users: state.UserReducer.users,
        answerQuestions: state.QuestionReducer.answerQuestions
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    seeResult,
};
const container = connect(mapStateToProps, mapDispatchToProps)(QuestionResult);
export default container;