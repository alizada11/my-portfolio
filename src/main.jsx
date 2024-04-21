import React from 'react'
import ReactDOM from 'react-dom/client' 
import './assets/style.css';
import './assets/mobileStyle.css';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
