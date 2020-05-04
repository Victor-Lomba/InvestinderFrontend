import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container,
          Content,
          Logo,
          Background1,
          Background2, } from './styles';
import logoImg from '../../assets/logoInv.png';
import backgroundImg from '../../assets/circlelarge.png';
import backgroundImg2 from '../../assets/circle-small.png';
import api from '../../services/api';

const Matches = () => {
  const u = localStorage.getItem('@InvesTinder:user');
  const user = JSON.parse(u);
  const matches = user.matches !== null ? user.matches : null;


    return (
    <>
    <Logo src={logoImg} />
    <Container>

      <Link to="/dashboard" />

          <Content>
        </Content>
        <Background1 src={backgroundImg} alt="InvesTinder"></Background1>
      <Background2 src={backgroundImg2} alt="InvesTinder"></Background2>
    </Container>
    </>
    )
}

export default Matches;
