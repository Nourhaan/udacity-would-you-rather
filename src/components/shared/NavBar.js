import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../App.css';
import { connect } from "react-redux";


function Navbar(props) {

  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <div id="navbarNav">
          {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard" exact  >Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add" exact  >New Question</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard" exact  >Leaderboard</NavLink>

            </li>
          </ul>
        </div>
      </div>
      <div className="user-part">
        <p className="user-name" id="logged_username">{props.users.filter(u => u.id === localStorage.getItem("logged_user"))[0].name}</p>
        <Link className="nav-link" onClick={() => localStorage.setItem('logged_user', "")} to='/login'>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
        </Link>

      </div>
    </nav>
  )

}


// export default Navbar

// include state in the component as props
const mapStateToProps = (state) => {
  console.log(`state\n`, state);

  return {
    users: state.UserReducer.users,
    path: state.UserReducer.path
  };
};

// // include actions in the component as props
const mapDispatchToProps = {
};

const container = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default container;
