import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiHeart, FiX, FiSearch } from  'react-icons/fi'
import { useSwipeable } from "react-swipeable";
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/auth';


import api from '../../services/api';

import RButton from '../../components/RoundButton';
import Input from '../../components/Input';

import backgroundImg2 from '../../assets/circlelarge.png';
import backgroundImg from '../../assets/circle-small.png';
import altpic from '../../assets/altpic.jpg';

import logoImg from '../../assets/logo.png';

import { Container,
          Content,
          AnimationContainer,
          ButtonContainer,
          Logo,
          LButton,
          Background,
          Background2,
          FormCont,
          PREV,
          NEXT } from './styles';

const Dashboard = () => {
  const initialState = { pos: 0, sliding: false, dir: NEXT };
  const u = localStorage.getItem('@InvesTinder:user');
  const user = JSON.parse(u);
  const id = user.id;

  const formRef = useRef(null);
  const [profiles, setProfiles] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const { signOut } = useAuth();

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const slide = dir => {
    dispatch({ type: dir });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(()=>{
    setTimeout(() => {
      if (user.interesses !== undefined) {
        api.get('/profile/investidor/list', {
          headers: {
              uid: id,
          }
      }).then(response =>{
          setProfiles(response.data);
      });
      }
      if (user.empresa !== undefined){
        api.get('/profile/consultor/list', {
          headers: {
              uid: id,
          }
      }).then(response =>{
          setProfiles(response.data);
      });
      }
    }, 1200);
}, [id, profiles, user.empresa, user.interesses]);

  async function handleLike(ID) {
    if (user.interesses !== undefined){
      api.post(`/profile/investidor/${ID}/like`, {
        UserId: id
      }).then(response =>{
        console.log(response.data);
    });
      setIsLiked(true);

      setTimeout(() => {
        setIsLiked(false);
        setIsDisliked(false);
      }, 1000);

    }
    if(user.empresa !== undefined){
      api.post(`/profile/consultor/${ID}/like`, {
        UserId: id
      }).then(response =>{
        console.log(response.data);
    });
      setIsLiked(true);

      setTimeout(() => {
        setIsLiked(false);
        setIsDisliked(false);
      }, 1000);
    }

    console.log(isLiked);
  }

  async function handleDislike(ID) {
    try {
      if(user.interesses !== undefined){
        api.post(`/profile/investidor/${ID}/dislike`, {
          UserId: id
        }).then(response =>{
          console.log(response.data);
      });

        setIsDisliked(true);

        setTimeout(() => {
          setIsLiked(false);
          setIsDisliked(false);
        }, 1000);

      }
      if (user.empresa !== undefined){
        api.post(`/profile/investidor/${ID}/dislike`, {
          UserId: id
        }).then(response =>{
          console.log(response.data);
      });

        setIsDisliked(true);

        setTimeout(() => {
          setIsLiked(false);
          setIsDisliked(false);
        }, 1000);

      }

      console.log(isDisliked);
    } catch(err) {}
  }

  const search = useCallback(
    async(data) => {
    try {
      if (profiles.interesses){
        profiles.filter(profile => profile.interesses.trim() === data.search);
      }
      return
    } catch (err) {
    }
  }, [profiles]);

  return (
    <>
      <Container >
        <Content>
          <Logo src={logoImg} />
          <LButton type='button' onClick={signOut}>
                    <FiPower size={18} />
                </LButton>
          <Link to="/matches">
            <FiHeart />
            Matches
          </Link>
          <FormCont>
            <Form ref={formRef} onSubmit={search}>
              <Input name="search" icon={FiSearch} placeholder="Filtrar" />
            </Form>
          </FormCont>
          <AnimationContainer {... handlers} isLiked={isLiked} isDisliked={isDisliked} dir={state.dir} sliding={state.sliding} >
            <img src={ !!profiles.pic ? profiles.pic : altpic }
            alt={ altpic } />

            <h1>{ profiles.name ? profiles.name : 'Carregando novos perfis...'}</h1>

            <h2>{profiles.name ? 'Bio:' : 'Volte novamente mais tarde, se já explorou todos os perfis'}</h2>
            <h3>{ profiles.bio }</h3>

            <h2>{ profiles.empresa ? 'Empresa' : profiles.interesses ? 'Interesses:' : '' }</h2>
            <h3>{ profiles.empresa ? profiles.empresa : profiles.interesses ? profiles.interesses : '' }</h3>

            <ButtonContainer>
              <RButton onClick={() => handleDislike(profiles.id)} className="but1" icon={FiX}></RButton>
              <RButton onClick={() => handleLike(profiles.id)} className="but2" icon={FiHeart}></RButton>
            </ButtonContainer>
          </AnimationContainer>
        </Content>
        <Background src={backgroundImg2} />
        <Background2 src={backgroundImg} />
      </Container>
    </>
  );

  function reducer(state, { type }) {
    switch (type) {
      case "reset":
        return initialState;
      case PREV:
        handleLike(profiles.id)
        return {
          ...state,
          dir: PREV,
          sliding: true,
          pos: state.pos === 0 ? null : state.pos - 1
        };
      case NEXT:
        handleDislike(profiles.id)
        return {
          ...state,
          dir: NEXT,
          sliding: true,
          pos: state.pos === null ? 0 : state.pos + 1
        };
      case "stopSliding":
        return { ...state, sliding: false };
      default:
        return state;
    }
  }
}

export default Dashboard;
