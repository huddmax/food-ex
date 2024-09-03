import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputWithText } from '../../components/InputWithText'

import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container, Background, Form } from './styles';


export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                
                
                <h2>Faça seu Login</h2>

                <InputWithText
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    id="inputEmail"
                    type="text" 
                    onChange={ e=> setEmail(e.target.value) }
                
                />

                <InputWithText
                    title="Senha"
                    id="inputPassword"


                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    onChange={ e=> setPassword(e.target.value) }
                
                />

            
                <Button title="Entrar" onClick={handleSignIn} />
                    
                <Link to="/register" >
                    Criar uma conta
                </Link >

            </Form>

            <Background>
                 <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
</svg>

                <h1>food explorer</h1>
                
            </Background>

        </Container>

    );
}