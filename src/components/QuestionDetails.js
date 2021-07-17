import React, { Component } from 'react'
import { connect } from "react-redux";
import QuestionResult from './../components/QuestionResult';
import AnswerQuestion from './../components/AnswerQuestion';


class QuestionDetails extends Component {
    constructor(props) {
        console.log("Props", props);
        super(props)
    }

    render() {
        const { listType } = this.props;
        return (
            <div>
                {(function () {
                    switch (listType) {
                        case 'answered':
                        return <QuestionResult />
                        default:
                        return <AnswerQuestion />
                    }
                }()
                )}
            </div>


        )
    }
}

// export default QuestionDetails
// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state\n`, state);

    return {
        listType: state.QuestionReducer.listType
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
};


const container = connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
export default container;
