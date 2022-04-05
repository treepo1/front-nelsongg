
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { ReturnHome, Container} from './styles'

export default function NotFound(){
    const navigate = useNavigate()
    return(
      <>
    <Container>
      <ReturnHome onClick = {()=> navigate('/')}>
        <FaAngleLeft size={30} color="#FFF" />
        <span>Esse jogador não está cadastrado no nelson.gg. Por favor, verifique a ortografia ou tente novamente mais tarde</span>
     </ReturnHome>
    </Container>
    </>
    )
}