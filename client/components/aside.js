import React, { Component } from 'react'
import Button from '../common/button'
import Input from '../common/input'

class Aside extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      author: '',
      pages: '',
      formErrors: { title: '', author: '' },
      titleValid: null,
      authorValid: null,
      formValid: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const { editedBook } = this.props
    if (editedBook !== nextProps.editedBook) {
      nextProps.editedBook && this.changeObjectProp(nextProps.editedBook)
    }
  }

  changeObjectProp (data) {
    Object.getOwnPropertyNames(data).forEach((val) => {
      this.setState({ [val]: data[val] })
    })
  }

  getDate (year) {
    return year && new Date(year).toISOString().slice(0,10)
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let authorValid = this.state.authorValid
    let titleValid = this.state.titleValid
    switch(fieldName) {
      case 'title':
        titleValid = value.length >= 2
        fieldValidationErrors[fieldName] = titleValid ? '': `${fieldName} is too short`
        break
      case 'author':
        authorValid = value.length >= 2
        fieldValidationErrors[fieldName] = authorValid ? '': `${fieldName} is too short`
        break
    }
    this.setState({formErrors: fieldValidationErrors,
                    authorValid: authorValid,
                    titleValid: titleValid
                  }, this.validateForm)
  }

  validateForm () {
    this.setState({formValid: this.state.authorValid &&
                              this.state.titleValid})
  }

  clearState () {
    this.setState({ title: '', year: '', author: '', pages: '', formValid: false })
  }

  render () {
    const { editedBook, updateState, updateBook } = this.props
    const {
      title, year, author, pages, titleValid, authorValid, formErrors, formValid
    } = this.state
    return (
      <div className='aside'>
        <span>Название:</span>
          <Input
            value={title}
            onChange={(e) => {
              this.validateField('title', e.target.value)
              this.setState({ title: e.target.value })
            }} />
          {
            !titleValid &&
            title.length > 0 &&
            <p className={!titleValid ? '' : 'hidden'}>{formErrors.title}</p>
          }
        <span>Автор:</span>
          <Input
            value={author}
            onChange={(e) => {
              this.validateField('author', e.target.value)
              this.setState({ author: e.target.value })
            }} />
          {
            !authorValid &&
            author.length > 0 &&
            <p className={!authorValid ? '' : 'hidden'}>{formErrors.author}</p>
          }
        <span>Год издания:</span>
          <Input
            type={'date'}
            value={this.getDate(year)}
            onChange={(e) => this.setState({ year: e.target.value })} />
        <span>Кол-во страниц:</span>
          <Input
            type={'number'}
            value={pages}
            onChange={(e) => this.setState({ pages: e.target.value })} />
        <Button
          className='green-button'
          onClick={() => formValid &&
            updateBook(this.state) &&
            this.clearState()
          }>{editedBook ? 'Сохранить' : 'Добавить'}</Button>
        {
          editedBook &&
          <Button
            className='red-button'
            onClick={() => {
              updateState({ editedBook: null, editedBookId: null })
              this.clearState()
            }}>Отменить</Button>
        }
      </div>
    )
  }
}

export default Aside
