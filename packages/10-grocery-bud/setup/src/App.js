import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [grocery, setGrocery] = useState('')
  const [id, setId] = useState(0)
  const [groceryList, setGroceryList] = useState([])

  const [index, setIndex] = useState(0)
  const [editing, setEditing] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      setId(id + 1) // 下面的取值会加一吗？多个set在一起会怎么处理？
      setGroceryList([...groceryList, {
        id,
        name: grocery,
      }])
    } else {
      groceryList[index].name = grocery //需要复制数组吗？最好要
      setGroceryList(groceryList)
      setEditing(false)
    }
    setGrocery('')
  }
  const handleEdit = (idx) => {
    setGrocery(groceryList[idx].name)
    setIndex(idx)
    setEditing(true)
  }
  const handleDelete = (idx) => {
    const newList = groceryList.filter((item, index) => index !== idx)
    setGroceryList(newList)
  }
  const handleClear = () => {
    setGroceryList([])
    setId(0) //需要重设id吗？
  }
  return (
    <section className='section-center'>
      <Alert />

      <h2>grocery bud</h2>
      <form onSubmit={handleSubmit} className='form-control'>
        <input type="text" className='grocery' value={grocery} onChange={(e) => setGrocery(e.target.value)} />
        <button type="submit" className='submit-btn'>
          {editing ? 'Edit' : 'Add'}
        </button>
      </form>
      {
        groceryList.length > 0 &&
        <List
          groceryList={groceryList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClear={handleClear}
        />
      }
    </section>

  )
}

export default App
