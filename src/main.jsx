import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GreetingComponent from './GreetingComponent.jsx'
import BigCatsComponent from './BigCatsComponent.jsx'
import SingleCatComponent from './BigCatsComponent.jsx'
import EmojiComponent from './EmojiComponent.jsx'
import AddCatForm from './AddCatForm.jsx'
import Calculator from './Calculator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <GreetingComponent />
    <BigCatsComponent />
    <SingleCatComponent />
    <EmojiComponent />
    <AddCatForm />
    <Calculator />
    <App />
  </React.StrictMode>,
)
