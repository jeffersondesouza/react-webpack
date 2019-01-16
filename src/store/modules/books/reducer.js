import INITIAL_STATE from './state'

import * as ActionTypes from './constants';


function booksReducer(state = INITIAL_STATE, action) {
	switch (action.type) {


		case ActionTypes.LOAD_BOOKS_REQUEST:
			return {
				...state,
				books: [],
				isLoadingBooks: true,
			}

		case ActionTypes.LOAD_BOOKS_SUCCESS:
			return {
				...state,
				books: [...action.payload.books],
				isLoadingBooks: false,
				error: null
			}

		case ActionTypes.LOAD_BOOKS_FAILURE:
			return {
				...state,
				isLoadingBooks: false,
				error: { ...action.payload.error }
			}




		case ActionTypes.LOAD_BOOK_REQUEST:
			return {
				...state,
				detailsBook: {},
				isLoadingDetailsBook: true
			}

		case ActionTypes.LOAD_BOOK_SUCCESS:
			return {
				...state,
				bookMessage:'',
				error: null,
				detailsBook: { ...action.payload.book },
				isLoadingDetailsBook: false
			}

		case ActionTypes.LOAD_BOOK_FAILURE:
			return {
				...state,
				isLoadingDetailsBook: false,
				error: { ...action.payload.error }
			}

		case ActionTypes.SAVE_BOOKS_REQUEST:
			return {
				...state,
				isSavingBook: true
			}

		case ActionTypes.SAVE_BOOKS_SUCCESS:
			return {
				...state,
				isSavingBook: true,
				editingBookMode: false,
				error: null
			}

		case ActionTypes.SAVE_BOOKS_FAILURE:
			return {
				...state,
				isSavingBook: false,
				error: { ...action.payload.error }
			}


		case ActionTypes.SELECT_BOOK_TO_UPDATE:
			return {
				...state,
				editingBook: { ...action.payload.book },
				editingBookMode: true,
			}


		case ActionTypes.UPDATE_BOOK_REQUEST:
			return {
				...state,
				isSavingBook: true,
				bookMessage:'',
				detailsBook: { ...action.payload.book },
			}

		case ActionTypes.UPDATE_BOOK_SUCCESS:
			return {
				...state,
				isSavingBook: false,
				editingBookMode: false,
				bookMessage:'Status de Leitura alterado com sucesso!',
				error: null
			}

		case ActionTypes.UPDATE_BOOK_FAILURE:
			return {
				...state,
				isSavingBook: false,
				bookMessage:'Ops, não conseguimos altrar o status da litura',
				error: { ...action.payload.error }
			}


		case ActionTypes.DELETE_BOOK_REQUEST:
			return {
				...state,
				isDeletingBook: true,
			}

		case ActionTypes.DELETE_BOOK_SUCCESS:
			return {
				...state,
				isDeletingBook: false,
				detailsBook: {},
				error: null
			}

		case ActionTypes.DELETE_BOOK_FAILURE:
			return {
				...state,
				isDeletingBook: false,
				error: { ...action.payload.error }
			}


		default:
			return state;
	}
}


export default booksReducer;
