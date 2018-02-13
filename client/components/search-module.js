import React from 'react'
import Input from '../common/input'

const SearchModule = ({ books }) => {

  const removeClass = (selector, id) => {
    document.querySelector(`${selector}${id}`).classList.remove('hidden')
  }

  const addClass = (selector, id) => {
    document.querySelector(`${selector}${id}`).classList.add('hidden')
  }

  const searchInfo = (data) => {
    books.filter((book, i) => {
      book.title.toLowerCase().includes(data.toLowerCase())
      ? removeClass('#card_', i + book.pages)
      : addClass('#card_', i + book.pages)
    })
  }

  return (
    <div className='module'>
      <span>Поиск:</span>
      <Input onChange={(event) => searchInfo(event.target.value)} />
    </div>
  )
}

export default SearchModule
