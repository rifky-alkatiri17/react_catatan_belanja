import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Header from './component/header.jsx'
import Form from './component/form.jsx'
import GroceryList from './component/grocery_list.jsx'
import Footer from './component/footer.jsx'

const groceryItems = [
  {
        id: 1,
        name: 'Kopi Bubuk',
        quantity: 2,
        checked: true,
      },
      {
        id: 2,
        name: 'Gula Pasir',
        quantity: 5,
        checked: false,
      },
      {
        id: 3,
        name: 'Air Mineral',
        quantity: 3,
        checked: false,
      },
];

 

function App() {
  // const [count, setCount] = useState(0) 
  const [items, setItems] = useState(groceryItems);

  function handleAddItems(obj){
    setItems([...items,obj]); //immutability
    console.log(items);
  }

  function handleDeleteItems(i){
    // console.log(`data yg akan dihapus adalah index ke ${i}`);
    setItems(items.filter(item=>item.id!==i));
    console.log(items)
  }

  function handleChecked(i){
    setItems(items.map(item=>item.id===i? {...item, checked:!item.checked} : item));
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItems={handleAddItems} />
        <GroceryList data={items}  onDeleteItems={handleDeleteItems} onChecked={handleChecked}/>
        <Footer />
      </div>
    </>
  )
}

export default App
