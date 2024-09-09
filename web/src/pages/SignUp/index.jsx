import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { Button } from '../../components/Button';
import {InputWithText} from '../../components/InputWithText'

import { Container, Form, Background } from './style';

import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <Container>
            <Form>
             
                <h2>Crie sua conta</h2>
                
                <InputWithText  
                    title="Seu nome"
                    id="inputName"
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                />

                <InputWithText
                    title="Email"
                    id="inputEmail"
                    placeholder="Exemplo: exemplo@email.com.br" 
                    type="text" 
                    autoComplete="userName"
                />

                <InputWithText
                    title="Senha"
                    id="inputPassword"
                
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    autoComplete="current-password"

                />
                <Button title="Criar Conta" />

                <p onClick={goToLogin}>Já tenho uma conta</p>
                
            </Form>

            <Background>
                <ExplorerIcon/>
                <h1>food explorer</h1>
            </Background>

        </Container>

    );
}