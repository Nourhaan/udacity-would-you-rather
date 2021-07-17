
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({component: ComposedComponent, ...rest}) => {

  class Authentication extends Component {

    /* Redirect if not authenticated; otherwise, return the component imputted into <PrivateRoute /> */
    handleRender = props => {
      if (!this.props.isAuthenticated) {
        return <Redirect to="login" />
      } else {
        return <ComposedComponent {...props}/>
      }
    }

    render() {
      return (
        <Route {...rest} render={this.handleRender}/>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.UserReducer.currentUser !== null
    };
  }

  const AuthenticationContainer = connect(mapStateToProps)(Authentication);
  return <AuthenticationContainer/>
};

// ___________________________________________________________________________________________________

// Another Solution but go to login when refresh not working in this solution 

// // // import React from "react";
// // // import { Route, Redirect } from 'react-router-dom';

//working 
// // // export const PrivateRoute = ({ component: Component, ...rest }) => {  

// // //     const logged_user = localStorage.getItem("logged_user");   

// // //     return <Route {...rest} render={(props) => (
// // //         <React.Fragment>
// // //             <div className="contentBar">
// // //                 {!logged_user ? <Redirect to={{ pathname: '/login', state: { from: props.location }}} /> : <Component {...props} /> }  
// // //             </div>
// // //         </React.Fragment>  
// // //     )} />
// // // };

