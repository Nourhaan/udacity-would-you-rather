import React, { Component } from 'react'
import Navbar from './shared/NavBar';
import { connect } from "react-redux";
import {fetchData} from './../redux/actions/actions'
class UserCard extends Component {
  
    componentDidMount() {
        this.props.fetchData()
    }
    render() {
        return (
            <div>
                <Navbar />
                {
                    this.props.users.map((user) => (
                        <div key={user.id} className="container">
                            <div className="card user-card">
                                <div className="info-card">
                                    <img className="card-img-top" src={user.avatarURL} alt="User Avatar" 
                                    style={{ width: '30%', height: '30%', borderRadius: '25px' }} />

                                    <div className="card-body ">

                                        <h4 className="card-title ">{user.name}</h4>

                                        <p className="card-text ">Answered Questions <span>{Object.keys(user.answers).length}</span></p>

                                        <p className="card-text ">Created Questions <span>{user.questions.length}</span></p>

                                    </div>

                                </div>

                                <div className="card score-info">

                                    <div className="card-header">

                                        Score

            <ul className="list-group list-group-flush">

                                            <li className="list-group-item">{Object.keys(user.answers).length + user.questions.length}</li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}
            </div>
        )
    }
}

// export default UserCard
// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state\n`, state);

    return {
        users: state.UserReducer.users
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    fetchData
};



const container = connect(mapStateToProps, mapDispatchToProps)(UserCard);
export default container;