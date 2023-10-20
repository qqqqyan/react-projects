import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategorie = ['all', 'Breakfirst', 'Lunch', 'Shakes']
function App() {
  // const [menuItems, setMenuItems] = useState(items);
  const [selected, setselected] = useState('all');
  const filterItems = () => {
    if (selected === 'all') {
      return items
    }
    return items.filter(item => item.category === selected)
  }
  return (
    <main>
      <header className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </header>
      <section className='btn-container'>
        <Categories categories={allCategorie} onSelect={(selected) => setselected(selected)}></Categories>
      </section>
      <section className='section-center'>
        {filterItems().map(menu => (
          <Menu menu={menu} key={menu.id}></Menu>
        ))}
      </section>
    </main >
  )

}

export default App;
