import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [datas, setData] = useState(data);
  
  return (
    <div className='container'>
      <h2>Birthdays Today</h2>
      <List data={datas}></List> 
      <button onClick={() => setData([])}>Reset</button>
    </div>
  )
}

export default App;
