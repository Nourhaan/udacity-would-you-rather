import React, { Component } from 'react'
import Navbar from './shared/NavBar';

class NotFound extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="not-found">
                    <h1>404 Not Found !</h1>
                </div>
            </div>
        )
    }
}
export default NotFound;