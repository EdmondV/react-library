import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateState: ['data'],
  deleteBook: ['data'],
  updateBook: ['data']
})

export const RequestsTypes = Types
export default Creators

export const INITIAL_STATE = {
  books: JSON.parse(localStorage.getItem('/books')) || [],
  editedBook: null,
  deletedBook: null,
  sortObj: JSON.parse(localStorage.getItem('/sort')) || { field: '', type: null }
}

export const updateState = (state, { data }) => {
  return { ...state, ...data }
}

export const deleteBook = (state, { data }) => {
  const stateBooks = JSON.parse(localStorage.getItem('/books'))
  stateBooks.map((book, i) => {
    if (book.title === data.title && book.author === data.author) {
      stateBooks.splice(i, 1)
    }
  })

  localStorage.setItem('/books', JSON.stringify(stateBooks))
  return { ...state, books: stateBooks }
}

export const updateBook = (state, { data }) => {
  let newBooks = []
  const stateEditedBook = state.editedBook
  const stateBooks = state.books.slice()

  stateEditedBook !== null
  ? newBooks = stateBooks.map((book, i) => {
      if (book.title === stateEditedBook.title && book.author === stateEditedBook.author) {
        book = data
      }
      return book
    })
  : newBooks = stateBooks.concat(data)

  localStorage.setItem('/books', JSON.stringify(newBooks))
  return { ...state, books: newBooks, editedBook: null }
}

 export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STATE]: updateState,
  [Types.DELETE_BOOK]: deleteBook,
  [Types.UPDATE_BOOK]: updateBook,
})
