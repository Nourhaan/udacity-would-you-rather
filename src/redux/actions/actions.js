import {
	ADD_QUESTION, ANSWER_QUESTION,
	FETCH_DATA_SUCCESS, FETCH_QUESTIONS_SUCCESS,
	SEE_RESULT, REFRESH_UPDATES, LOGIN, CHANGE_LIST_TYPE
} from '../constants';
import * as DataAPI from '../../_DATA'

// export const answerQuestion = (question) => ({ type: ANSWER_QUESTION ,question});

export const seeResult = (question) => ({ type: SEE_RESULT, question });
export const changeListType = (listType) => ({ type: CHANGE_LIST_TYPE, listType });

// to sort users according to the sum of answered questions and created questions 
function compare( a, b ) {
	const sum_a = Object.keys(a.answers).length + a.questions.length;
	const sum_b = Object.keys(b.answers).length + b.questions.length;
	if ( sum_a < sum_b ){
	  return -1;
	}
	if ( sum_a > sum_b ){
	  return 1;
	}
	return 0;
  }
  
export const fetchData = () => async (dispatch) => {
	let response = await DataAPI._getUsers();
	response = Object.values(response);
	response.sort( compare ).reverse();

	dispatch(fetchDataSuccess(response));
};

export const fetchDataSuccess = (json) => ({
	type: FETCH_DATA_SUCCESS,
	users: json,
});

export const fetchQuestions = () => async (dispatch) => {
	let response = await DataAPI._getQuestions();
	response = Object.values(response);
	let answerQuestions = response.reduce(function (result, q) {
		if (q.optionOne.votes.includes(localStorage.getItem("logged_user"))
			|| q.optionTwo.votes.includes(localStorage.getItem("logged_user"))) {
			result.push(q);
		}
		return result;
	}, []);

	let unanswerQuestions = response.reduce(function (result, q) {
		if (!q.optionOne.votes.includes(localStorage.getItem("logged_user"))
			&& !q.optionTwo.votes.includes(localStorage.getItem("logged_user"))
		) {
			result.push(q);
		}
		return result;
	}, []);

	// To show the most recent question at first 
	unanswerQuestions.sort(function (x, y) {
		return x.timestamp - y.timestamp;
	}).reverse()

	answerQuestions.sort(function (x, y) {
		return x.timestamp - y.timestamp;
	}).reverse()

	dispatch(fetchQuestionsSuccess(response, answerQuestions, unanswerQuestions));
};

export const fetchQuestionsSuccess = (questions, answerQuestions, unanswerQuestions) => ({
	type: FETCH_QUESTIONS_SUCCESS,
	questions: questions,
	answerQuestions: answerQuestions,
	unanswerQuestions: unanswerQuestions,
});

export const postQuestion = (question) => async (dispatch) => {
	let response = await DataAPI._saveQuestion(question);
	dispatch(addQuestionSuccess(response));
};

export const addQuestionSuccess = (question) => ({ type: ADD_QUESTION, question });




export const answerQuestion = (question) => async (dispatch) => {
	await DataAPI._saveQuestionAnswer(question);
	dispatch(saveQuestionAnswerSuccess(question));
};

export const saveQuestionAnswerSuccess = (question) => ({ type: ANSWER_QUESTION, question });


export const authCheckState = () => ({ type: REFRESH_UPDATES })
export const login = (user) => ({ type: LOGIN, user })