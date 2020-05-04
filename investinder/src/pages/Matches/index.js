import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi'

import { Container,
          Content,
          Logo,
          Background1,
          Background2,
          ContainerCont,
          LinkContainer,
          } from './styles';
import logoImg from '../../assets/logoInv.png';
import backgroundImg from '../../assets/circlelarge.png';
import backgroundImg2 from '../../assets/circle-small.png';
import api from '../../services/api';

const Matches = () => {
  const u = localStorage.getItem('@InvesTinder:user');
  const user = JSON.parse(u);
  const matches = user.matches;
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetch() {
      if (user.interesses !== null){
        const response = await api.post('/profile/investidor/matches', {
          Matches: matches
        });
        setProfiles(response.data);
      }
      if (user.empresas !== null){
        const response = await api.post('/profile/consultor/matches', {
          Matches: matches
        });
        setProfiles(response.data);
      }
    }
    fetch()
  }, [matches, user.interesses, user.empresas])


    // setProfiles(profiles.filter(profile => profile !== null));

    return (
    <>
    <Logo src={logoImg} />
    <LinkContainer>
      <Link to="/dashboard">
            <FiHeart />
            Voltar à pagina principal
          </Link>
    </LinkContainer>
    <Container>
    <a href="/dashboard">
            <FiHeart />
            Voltar à pagina principal
          </a>

        <ContainerCont>
          {profiles.map(profile => profile !== null && (
            <Content key={profile.id} >
              <h3>{profile.name}</h3>

              <h1>{profile.email}</h1>
              <h1>{profile.telefone}</h1>
            </Content>
          ))}
        </ContainerCont>

        <Background1 src={backgroundImg} alt="InvesTinder"></Background1>
      <Background2 src={backgroundImg2} alt="InvesTinder"></Background2>
    </Container>
    </>
    )
}

export default Matches;
