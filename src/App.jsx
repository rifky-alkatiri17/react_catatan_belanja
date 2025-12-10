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
        checked: true,
      },
];

function App() {
  // const [count, setCount] = useState(0)
  const [items, setItems] = useState(groceryItems);
  function handleAddItems(obj){
    setItems(groceryItems.push(obj));
    console.log(items);
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form data={groceryItems} handleAddItems={handleAddItems} />
        <GroceryList data={groceryItems} />
        <Footer />
      </div>
    </>
  )
}

export default App
