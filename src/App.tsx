import { useState } from 'react'
import { Barrapesquisa } from './components/BarraPesquisa'
import test from './imgs/test.png'
import './App.css'




function App() {


  return (
    <div className="App">
      <img className= "simb" src = {test}></img>
      <Barrapesquisa></Barrapesquisa>
    </div>
  )
}

export default App
