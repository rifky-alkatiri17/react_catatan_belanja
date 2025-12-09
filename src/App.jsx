import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Header from './component/header.jsx'
import Form from './component/form.jsx'
import GroceryList from './component/grocery_list.jsx'
import Footer from './component/footer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <Form />
        <GroceryList />
        <Footer />
      </div>
    </>
  )
}

export default App
