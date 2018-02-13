import React from 'react'
import classNames from 'classnames'
import Button from '../common/button'

const FilterModule = ({ titleSort, updateState, sortObj }) => {

  const sort = (field, type) => {
    switch (type) {
      case null:
        updateState({ sortObj: { field: field, type: 'asc' } })
        addToLocalStorage(field, 'asc')
        break
      case 'asc':
        updateState({ sortObj: { field: field, type: 'desc' } })
        addToLocalStorage(field, 'desc')
        break
      case 'desc':
        updateState({ sortObj: { field: field, type: null } })
        addToLocalStorage(field, null)
        break
    }
  }

  const addToLocalStorage = (field, type) => {
    localStorage.setItem('/sort', JSON.stringify({ field: field, type: type }))
  }

  const authorArrowClasses = classNames('btn', {
    'btn_down': sortObj.type === 'asc' && sortObj.field === 'author',
    'btn_up': sortObj.type === 'desc' && sortObj.field === 'author',
  })

  const titleArrowClasses = classNames('btn', {
    'btn_down': sortObj.type === 'asc' && sortObj.field === 'title',
    'btn_up': sortObj.type === 'desc' && sortObj.field === 'title',
  })

  return (
    <div className='module'>
      <span>Сортировать:</span>
      <Button
        className={authorArrowClasses}
        onClick={() => sort('author', sortObj.type)}>По автору</Button>
      <Button
        className={titleArrowClasses}
        onClick={() => sort('title', sortObj.type)}>По названию</Button>
    </div>
  )
}

export default FilterModule
