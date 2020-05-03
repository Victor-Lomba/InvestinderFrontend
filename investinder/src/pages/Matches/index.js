import { Link } from 'react-router-dom';
import Container from '../../styles/global';
import logoImg from '../../assets/logoInv.png';
import backgroundImg from '../../assets/circlelarge.png';
import backgroundImg2 from '../../assets/circle-small.png';
import api from '../../services/api';

const page = () => {
  const u = localStorage.getItem('@InvesTinder:user.matches');
  const user = JSON.parse(u);
  



    return (
    <Container>

        <Content>
            
        </Content>
        <Link to="/">

        </Link>

        <Background1 src={backgroundImg} alt="InvesTinder"></Background1>
      <Background2 src={backgroundImg2} alt="InvesTinder"></Background2>
    </Container>
    )
}