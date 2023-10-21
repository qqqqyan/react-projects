import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ groceryList, onEdit, onDelete, onClear }) => {
  return (
    <div className='grocery-container'>
      {
        groceryList.map((grocery, index) => {
          return (
            <div key={grocery.id} className='grocery-item'>
              <div className='title'>{grocery.name}</div>
              <div className='btn-container'>
                <button className='edit-btn' onClick={() => onEdit(index)}>
                  <FaEdit />
                </button>
                <button className='delete-btn' onClick={() => onDelete(index)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          )
        })
      }
      <button className='clear-btn' onClick={() => onClear()}>Clear Item</button>
    </div>

  )
}

export default List
