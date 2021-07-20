import React from 'react'
import { connect } from "react-redux";
import QuestionResult from './../components/QuestionResult';
import AnswerQuestion from './../components/AnswerQuestion';
import ShouldLogin from './../components/ShouldLogin';
import { seeResult } from './../redux/actions/actions'
import NotFound from './../components/NotFound';

function QuestionDetails(props) {

    const { listType, question } = props;
    return (
        <div>
            {(function () {
                if (question) {
                    if (!localStorage.getItem("logged_user")) {
                        return <ShouldLogin />
                    } else {
                        switch (listType) {
                            case 'answered':
                                return <QuestionResult />
                            default:
                                return <AnswerQuestion />
                        }
                    }
                } else {
                    return <NotFound />
                }

            }()
            )}
        </div>


    )

}

// export default QuestionDetails
// include state in the component as props
const mapStateToProps = (state) => {
    console.log(`state\n`, state);

    return {
        listType: state.QuestionReducer.listType,
        questions: state.QuestionReducer.questions,
        question: state.QuestionReducer.question
    };
};

// // include actions in the component as props
const mapDispatchToProps = {
    seeResult
};


const container = connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
export default container;
