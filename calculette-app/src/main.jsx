import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CalculateProvider} from "./context/CalculateContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculateProvider>
     <App />
    </CalculateProvider>
  </React.StrictMode>,
)