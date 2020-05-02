import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiHeart, FiX, FiSearch } from  'react-icons/fi'
import { useSwipeable } from "react-swipeable";
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';


import api from '../../services/api';

import RButton from '../../components/RoundButton';
import Input from '../../components/Input';

import backgroundImg2 from '../../assets/circlelarge.png';
import backgroundImg from '../../assets/circle-small.png';

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
          H3,
          PREV,
          NEXT } from './styles';

const Dashboard = () => {
  const initialState = { pos: 0, sliding: false, dir: NEXT };
  const history = useHistory();
  const formRef = useRef(null);
  const [profiles, setProfiles] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const { addToast } = useToast();
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
    // api.get('profile', {
    //     headers: {
    //         Authorization: id,
    //     }
    // }).then(response =>{
    //     setProfiles(response.data);
    // });
}, [isLiked, isDisliked]);

  async function handleLike() {
    try {
      // await api.post('like', {
      //   headers: {
      //     Authorization: id,
      //   }
      // });

      setIsLiked(true);

      setTimeout(() => {
        setIsLiked(false);
        setIsDisliked(false);
      }, 1000);

      console.log(isLiked);
    } catch(err) {}
  }

  async function handleDislike() {
    try {
      // await api.post('dislike', {
      //   headers: {
      //     Authorization: id,
      //   }
      // });

      setIsDisliked(true);

      setTimeout(() => {
        setIsLiked(false);
        setIsDisliked(false);
      }, 1000);

      console.log(isDisliked);
    } catch(err) {}
  }

  const search = useCallback(
    async(data) => {
    try {
      // const peeps = await api.get('investidores');

      // peeps.filter(peeps.data.interesses === data.search);
    } catch (err) {

    }
  }, []);

  return (
    <>
      <Container >
        <Content>
          <Logo src={logoImg} />
          <LButton type='button' onClick={signOut}>
                    <FiPower size={18} />
                </LButton>
          <FormCont>
            <Form ref={formRef} onSubmit={search}>
              <Input name="search" icon={FiSearch} placeholder="Filtrar" />
            </Form>
          </FormCont>
          <AnimationContainer {... handlers} isLiked={isLiked} isDisliked={isDisliked} dir={state.dir} sliding={state.sliding} >
            <img src="https://scontent.fsdu18-1.fna.fbcdn.net/v/t1.0-9/79427507_1727159847421291_4016333500285190144_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=27Zz8ZZNI-AAX92cLA4&_nc_ht=scontent.fsdu18-1.fna&oh=f5d5cc42f9e0c644c905453b18c3e0af&oe=5ECE09C2"
            alt="Eler"/>

            <h1>João Gabriel Eler Mendes</h1>

            <h2>Bio:</h2>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident non dolores quam, recusandae assumenda neque esse facilis itaque optio impedit deserunt molestiae ab doloremque unde eaque a sapiente placeat tempora!</h3>

            <h2>Interesses:</h2>
            <h3>Node.js, ReactJS, React Native</h3>

            <ButtonContainer>
              <RButton onClick={handleDislike} className="but1" icon={FiX}></RButton>
              <RButton onClick={handleLike} className="but2" icon={FiHeart}></RButton>
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
        handleLike()
        return {
          ...state,
          dir: PREV,
          sliding: true,
          pos: state.pos === 0 ? null : state.pos - 1
        };
      case NEXT:
        handleDislike()
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
