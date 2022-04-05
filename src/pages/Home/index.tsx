
import test from '../../assets/test.png'
import './styles.css'
import Icon from '../../assets/icon.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home(){
    let navigate = useNavigate()
    const [summoner, setSummoner] = useState("")
    return (
    <div className="App">
        <img className ="simb" src = {test}></img>
        <div className="search">
            <div className='boxInput'>
            <input value = {summoner} type="text" placeholder="Nelson1" className='barra' onChange={e => setSummoner(e.target.value)} onKeyPress={(event) => {
    if (event.key === "Enter") {
      navigate(`/summoner/${summoner}`) }}}/>
           <button className= "botaoGG" onClick={()=> navigate(`/summoner/${summoner}`)}>
                <img className = 'icon' src = {Icon} ></img>
                </button>
        </div>
        </div>
</div>
    )
}