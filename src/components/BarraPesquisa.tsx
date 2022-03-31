import Icon from './icon.svg'
import './BarraPesquisa.css'
import axios from 'axios'
import { useState } from 'react'


const config = {
header : { "X-Riot-Token": "RGAPI-b81af079-8e02-45cb-b660-d3ba4bb07311"

}}


export function Barrapesquisa(){
    const [nome,SetNome] = useState('')
    const handleOnclick = async()=> await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nome}`)
    return(
        <div className="search">
            <div className='inputs'>
            <input type="text" placeholder="Nelson1" className='barra' onChange={e => SetNome(e.target.value)}/>
            <button className= "botaoGG" onClick={handleOnclick}>
                <img className = 'icon' src = {Icon} ></img>
                </button>
        </div>
        </div>
    )
}