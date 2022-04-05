import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home' 
import Summoner from '../pages/Summoner'
import NotFound from '../pages/NotFound'


export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element = {<Home/>} path="/"/>
            <Route element = {<Summoner/>} path = "/summoner/:id"/>
            <Route element = {<NotFound/>} path = "/notFound"/>
            <Route element = {<NotFound/>} path = "/summoner/"/>
        </Routes>
        </BrowserRouter>
    )

}