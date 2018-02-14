import React from 'react'
import Input from '../common/input'
import { removeClass, addClass } from '../helpers/class-helper'

const SearchModule = ({ books }) => {

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
