import React from 'react'
import BookCard from './book-card'

const BooksList = ({ books, updateState }) => {
  const list = books.map((book, i) => {
    return (
      <BookCard updateState={updateState} key={i} id={i} book={book} />
    )
  })
  return (
    <div className='books-list'>
      {list}
    </div>
  )
}

export default BooksList
