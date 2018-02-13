import React from 'react'

const removeClass = (selector, id) => {
  document.querySelector(`${selector}${id}`).classList.remove('hidden')
}

const addClass = (selector, id) => {
  document.querySelector(`${selector}${id}`).classList.add('hidden')
}

const BookCard = ({ book, updateState, id }) => {
  return (
    <div
      className='book-card'
      id={`card_${id + book.pages}`}
      onMouseEnter={() => removeClass('#test_', id)}
      onMouseLeave={() => addClass('#test_',id)} >
      <div className='book-card_content'>
        <h1 className='book-name'>{book.title}</h1>
        <span className='book-author'>Автор: {book.author}</span>
      </div>
      <div id={`test_${id}`} className='book-buttons hidden'>
        <img
          onClick={() => updateState({ editedBook: book })}
          src='http://simpleicon.com/wp-content/uploads/pen-15.png' />
        <img
          onClick={() => updateState({ isModalOpen: true, deletedBook: book })}
          src='https://png.icons8.com/metro/1600/full-trash.png' />
      </div>
    </div>
  )
}

export default BookCard
