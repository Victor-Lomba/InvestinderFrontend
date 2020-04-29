import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background, Background2, H3 } from './styles';
import logoImg from '../../assets/logo.png';
import backgroundImg2 from '../../assets/circlelarge.png';
import backgroundImg from '../../assets/circle-small.png';

var a, b;

const SignIn = () => {
  const formRef = useRef(null);

  (a = formRef.current) === null || a === void 0 ? void 0 : a.setErrors({});

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          (b = formRef.current) === null || b === void 0 ? void 0 : b.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer o login',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <>
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="InvesTinder" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>
          </Form>

          <Link to="/signupI">
            <FiLogIn />
            Criar conta como <span> Investidor</span>
          </Link>
          <Link to="/signupC">
            <FiLogIn />
            Criar conta como <span className="z" >Acessor</span>ou<span>Consultor</span>
          </Link>
        </AnimationContainer>
      </Content>

      <Background2 src={backgroundImg} />
      <Background src={backgroundImg2} />
    </Container>
    <H3>InvesTinder - 2020
| Desenvolvedores: João Gabriel Eler e Victor Lomba
| UX/Design: Andrew Canto e Rodrigo Rodrigues
| Marketing: Thamires Anuda
| Negócios: Andrew Canto</H3>
    </>
  );
};

export default SignIn;
