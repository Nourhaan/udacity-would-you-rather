import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { seeResult } from './../redux/actions/actions'

class Question extends Component {
 
    getResult(question) {
        this.props.seeResult(question);
    }
    render() {
        return (
            <div>
                {this.props.questionsToShow.map((question) => (
                    <div key={question.id} className="container">
                        <div className="card-container questions-card">
                            <div className="card-header" style={{ backgroundColor: 'black' }}>
                                <h4> {this.props.users.filter(u => u.id === question.author)[0].name} asks: </h4>
                            </div>
                            <div className="card-content">
                                <div className="info-card">
                                    <img className="card-img-top" src={this.props.users.filter(u => u.id === question.author)[0].avatarURL} alt="Cat"
                                        style={{ width: '30%', height: '30%', borderRadius: '25px' }} />
                                    <div className="card-body ">
                                        <h4 className="card-title ">Would you rather</h4>
                                        <p className="card-text ">{question.optionOne.text}</p>
                                        <Link className="btn view-post" to={`./questions/${question.id}`}
                                            onClick={() => this.getResult(question)} >View Post</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

// export default Question

// include state in the component as props
const mapStateToProps = (state) => {
    return {
        users: state.UserReducer.users,

    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    seeResult,
};
const container = connect(mapStateToProps, mapDispatchToProps)(Question);
export default container;

