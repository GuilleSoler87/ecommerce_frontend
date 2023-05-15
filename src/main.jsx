import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import wallpaper from "../src/assets/wallpaper.png"

ReactDOM.createRoot(document.getElementById('root')).render(
    <div style={{ wallpaper: `url(${wallpaper})` }}>
      <App />
    </div>
  );