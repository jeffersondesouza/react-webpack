import * as Action from './constants';

export default class BooksActions {

    static loadBooksRequest() {
        return {
            type: Action.LOAD_BOOKS_REQUEST
        }
    }

    static loadBooksSuccess(books) {
        return {
            type: Action.LOAD_BOOKS_SUCCESS,
            payload: { books }
        }
    }

    static loadBooksFailure(error) {
        return {
            type: Action.LOAD_BOOKS_FAILURE,
            payload: { error }
        }
    }


    static loadBookRequest(id) {
        return {
            type: Action.LOAD_BOOK_REQUEST,
            payload: { id }
        }
    }

    static loadBookSuccess(book) {
        return {
            type: Action.LOAD_BOOK_SUCCESS,
            payload: { book }
        }
    }

    static loadBookFailure(error) {
        return {
            type: Action.LOAD_BOOK_FAILURE,
            payload: { error }
        }
    }


    static saveBookRequest(book) {
        return {
            type: Action.SAVE_BOOKS_REQUEST,
            payload: { book }
        }
    }

    static saveBookSuccess() {
        return {
            type: Action.SAVE_BOOKS_SUCCESS,
        }
    }

    static saveBookFailure(error) {
        return {
            type: Action.SAVE_BOOKS_FAILURE,
            payload: { error }
        }
    }

    static selectBookToUpdate(book) {
        return {
            type: Action.SELECT_BOOK_TO_UPDATE,
            payload: { book }
        }
    }


    static updateBookRequest(book) {
        return {
            type: Action.UPDATE_BOOK_REQUEST,
            payload: { book }
        }
    }

    static updateBookSuccess() {
        return {
            type: Action.UPDATE_BOOK_SUCCESS,
        }
    }

    static updateBookFailure(error) {
        return {
            type: Action.UPDATE_BOOK_FAILURE,
            payload: { error }
        }
    }


    static deleteBookRequest(id) {
        return {
            type: Action.DELETE_BOOK_REQUEST,
            payload: { id }
        }
    }

    static deleteBookSuccess() {
        return {
            type: Action.DELETE_BOOK_SUCCESS,
        }
    }

    static deleteBookFailure(error) {
        return {
            type: Action.DELETE_BOOK_FAILURE,
            payload: { error }
        }
    }


}