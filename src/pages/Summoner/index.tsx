import { useEffect } from "react"
import { useLocation, useMatch, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import api from "../../services/api"
import { Spinner } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaAngleLeft } from 'react-icons/fa';
import { Container, HeaderContent, Content, SummonerInfo, IconSummoner, EloSummoner, FooterContent,WinsLabel,LossesLabel,CircleDiv,ReturnHome,ChampionsLayer,ChampionsLabel } from './styles'



import bronze from "../../assets/Emblem_Bronze.png"
import iron from "../../assets/Emblem_Iron.png"
import silver from "../../assets/Emblem_Silver.png"
import gold from "../../assets/Emblem_Gold.png"
import platinum from "../../assets/Emblem_Platinum.png"
import diamond from "../../assets/Emblem_Diamond.png"
import master from "../../assets/Emblem_Master.png"
import grandmaster from "../../assets/Emblem_Grandmaster.png"
import challenger from "../../assets/Emblem_Challenger.png"
import unranked from "../../assets/Emblem_Unranked.png"

export default function Summoner(){
    const location = useLocation()
    const navigate = useNavigate()
    const [summoner, setSummoner] = useState(Object)
    const [loading, setLoading] = useState(0)

    function validaElo(elo:string){
        switch (elo){
            case "UNRANKED":
                return <EloSummoner src = {unranked} alt = "elo"/>
            case "BRONZE":
                return <EloSummoner src = {bronze} alt = "elo" />
            case "IRON":
                return <EloSummoner src = {iron} alt = "elo" />
            case "SILVER":
                return <EloSummoner src = {silver} alt = "elo" />
             case "GOLD":
                return <EloSummoner src = {gold} alt = "elo" />  
            case "PLATINUM":
                return <EloSummoner src = {platinum} alt = "elo" />   
            case "DIAMOND":
                return <EloSummoner src = {diamond} alt = "elo" />      
            case "MASTER":
                return <EloSummoner src = {master} alt = "elo" />   
            case "GRANDMASTER":
                return <EloSummoner src = {grandmaster} alt = "elo" /> 
            case "CHALLENGER":
                return <EloSummoner src = {challenger} alt = "elo" />
        }
    }



    useEffect( ()  => {
        async function loadData(){
            setLoading(1)
            const res = await api.get(`${location.pathname}`)
            .catch((e) => navigate('/notFound'))

            if (res && res.data){
                setSummoner(res.data)
            }
            setLoading(0)
        }

    loadData();
    }, [])


    return( 
        <Container>
        {
            !loading ?
        (
            <>
            <Content>
            <HeaderContent>
                <IconSummoner src={summoner.iconUrl} alt ="icon"/>
                <SummonerInfo>
                    <h2>
                        <strong>{summoner.name}</strong>
                    </h2>
                    <h3>
                        Nível {summoner.summonerLevel} - {summoner.tier} {summoner.rank}
                    </h3>
                </SummonerInfo>
                {validaElo(summoner.tier)}
                </HeaderContent>
                <FooterContent>
                    <div>
                        <WinsLabel>
                            <strong>VITÓRIAS: </strong>
                            <label>{summoner.wins}</label>
                        </WinsLabel>
                        <LossesLabel>
                            <strong>DERROTAS: </strong>
                            <label>{summoner.losses}</label>
                        </LossesLabel>
                    </div>
                    <CircleDiv>
                        <label>
                            <strong>{summoner.winRate}%</strong>
                        </label>
                        <label>WIN RATE</label>
                    </CircleDiv>
                </FooterContent>
                <ChampionsLabel>PRINCIPAIS CAMPEÕES</ChampionsLabel>
                <ChampionsLayer>
                    <img src = {summoner.championsURL1}/>
                    <img src = {summoner.championsURL2}/>
                    <img src = {summoner.championsURL3}/>
                </ChampionsLayer>

                </Content>
                <ReturnHome onClick = {()=> navigate('/')}>
                <FaAngleLeft size={30} color="#FFF" />
                    <span>Voltar</span>
                </ReturnHome>
                </>)
        :
        (
        <div>
            <Spinner animation = "border" variant = "light"/>
        </div>)
    
    }
    </Container>

)}