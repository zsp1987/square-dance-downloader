import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const test = async () => {
    const filePath = await window.electronAPI.openFile();
    console.log(filePath)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>广场舞下载</p>
      </header>
      <div>
        <p>
          <input type="text"></input>
          <button type="button" onClick={test}>
            搜索
          </button>
        </p>
      </div>
    </div>
  )
}

export default App
