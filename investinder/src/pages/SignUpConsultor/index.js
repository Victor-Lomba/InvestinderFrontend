import React, { useCallback, useRef } from 'react';
import { FiArrowLeft,
          FiMail,
          FiLock,
          FiUser,
          FiBriefcase,
          FiPhone,
          FiBookOpen,
          FiCamera, } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import logoImg from '../../assets/logoCons.png';
import backgroundImg from '../../assets/circlelarge.png';
import backgroundImg2 from '../../assets/circle-small.png';

import { Container, Content, AnimationContainer, Background, Background1, Background2 } from './styles';

var a, b;

const SignUpConsultor = () => {
  const formRef = useRef(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        (a = formRef.current) === null || a === void 0 ? void 0 : a.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(5, 'Minimo de 5 digitos'),
          telefone: Yup.string(),
          bio: Yup.string(),
          empresa: Yup.string(),
          pic: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/profile/consultor', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer login no InvesTinder!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          (b = formRef.current) === null || b === void 0 ? void 0 : b.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro na criação de conta',
            description: 'Ocorreu um erro ao criar a conta',
          });

          return;
        }
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background>
      <img src={logoImg} alt="InvesTinder" />
      <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
      </ Background>

      <Content>
        <AnimationContainer>


          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>

            <h3>Insira seu nome</h3>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <h3>Insira um E-mail válido</h3>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <h3>Crie uma senha (minimo de 5 dígitos)</h3>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <h3>Insira seu número de telefone (opicional)</h3>
            <Input name="telefone" icon={FiPhone} placeholder="Telefone" />
            <h3>Conte-nos mais sobre sua experiência (opicional)</h3>
            <Textarea name="bio" icon={FiBookOpen} placeholder="Bio" />
            <h3>Especifique com qual empresa você está afiliado (opicional)</h3>
            <Input name="empresa" icon={FiBriefcase} placeholder="Empresa" />
            <h3>Link público para sua foto de perfil (opicional)</h3>
            <Input name="pic" icon={FiCamera} placeholder="Foto" />

            <Button type="submit">Criar conta</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background1 src={backgroundImg} alt="InvesTinder"></Background1>
      <Background2 src={backgroundImg2} alt="InvesTinder"></Background2>
    </Container>
  );
};

export default SignUpConsultor;
