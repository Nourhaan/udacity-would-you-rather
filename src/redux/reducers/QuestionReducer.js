
import {
    ADD_QUESTION, ANSWER_QUESTION,
    FETCH_QUESTIONS_SUCCESS, SEE_RESULT,
    CHANGE_LIST_TYPE
} from '../constants';

const initialState = {
    question: {}, // Id, question options[{},{}] , 
    unanswerQuestions: [],
    answerQuestions: [],
    questions: [],
    listType:"unanswered"
};

export const QuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:

            return {
                ...state,
                questions: state.questions.concat(action.question),
                unanswerQuestions: state.unanswerQuestions.concat(action.question)
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                unanswerQuestions: state.unanswerQuestions.filter(q => q.id !== action.question.qid),
                answerQuestions: state.answerQuestions.concat(state.questions.filter(q => q.id === action.question.qid))
            };
        case CHANGE_LIST_TYPE:
            return {
                ...state,
                listType:action.listType
            }
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.questions,
                unanswerQuestions: action.unanswerQuestions,
                answerQuestions: action.answerQuestions
            };
        case SEE_RESULT:
            return {
                ...state,
                question: action.question
            };
        default:
            return state;
    }
}