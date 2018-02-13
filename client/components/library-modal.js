import React from 'react'
import Button from '../common/button'
import Modal from 'react-modal'

const LibraryModal = ({ isModalOpen, updateState, deleteBook, deletedBook }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => updateState({ isModalOpen: false })}
      className='books-list_modal'
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <h1>Удалить книгу?</h1>
      <div className='books-list-buttons'>
        <Button
          className='green-button'
          onClick={() => {
            deleteBook(deletedBook)
            updateState({ isModalOpen: false, deltedBookId: null })
          }}
        >
          Yes
        </Button>
        <Button
          className='red-button'
          onClick={() => updateState({ isModalOpen: false, deltedBookId: null })}
        >
          No
        </Button>
      </div>
    </Modal>
  )
}

export default LibraryModal
