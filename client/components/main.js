import React, { Component } from 'react'
import { connect } from 'react-redux'
import RequestsActions from '../reducers/request'
import { sortBooks } from '../helpers/sort-helper'
import BooksList from './books-list'
import Aside from './aside'
import LibraryModal from './library-modal'
import SearchModule from './search-module'
import SortModule from './sort-module'
import Button from '../common/button'
import Input from '../common/input'
import '../style/main.css'

const Main = ({
  books,
  editedBook,
  updateState,
  updateBook,
  deleteBook,
  deletedBook,
  isModalOpen,
  sortObj,
  sortedBooks = sortObj && sortObj.type
                ? books.sort(sortBooks(sortObj.field, sortObj.type))
                : books,
}) => {
  return (
    <div className='app'>
      <LibraryModal
        isModalOpen={isModalOpen}
        updateState={updateState}
        deleteBook={deleteBook}
        deletedBook={deletedBook}
      />
      <Aside
        updateState={updateState}
        updateBook={updateBook}
        editedBook={editedBook}
      />
      <div className='right-block'>
        <div className='modules'>
          <SearchModule books={sortedBooks} />
          <SortModule
            sortObj={sortObj}
            updateState={updateState}
          />
        </div>
        <BooksList
          books={sortedBooks}
          updateState={updateState}
        />
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.req.books.slice(),
    editedBook: state.req.editedBook,
    deletedBook: state.req.deletedBook,
    isModalOpen: state.req.isModalOpen,
    sortObj: state.req.sortObj,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (data) => dispatch(RequestsActions.updateState(data)),
    deleteBook: (data) => dispatch(RequestsActions.deleteBook(data)),
    updateBook: (data) => dispatch(RequestsActions.updateBook(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
