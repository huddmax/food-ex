import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { InputWithText } from '../../components/InputWithText'
import { Button } from '../../components/Button';

import { Container, Background, Form } from './style';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';

import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(event) {
        event.preventDefault();
        if (!email || !password) {
            return alert("Preencha todos os campos");
        }
        signIn({ email, password });
    }


    const navigate = useNavigate();
    const goToSignUp = () => {
        navigate("/register");
    }
    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                
                
                <h2>Faça Login</h2>

                <InputWithText
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    id="inputEmail"
                    type="text" 
                    autoComplete="userName"
                    onChange={(e) => setEmail(e.target.value)}
                
                />

                <InputWithText
                    title="Senha"
                    id="inputPassword"


                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                
                />

                
                <Button title="Entrar" type="submit" />
                {/* <button type="submit">Entrar</button>  */}
                    
                <p onClick={goToSignUp}>
                    Criar uma conta
                </p>

            </Form>

            <Background>
                 <ExplorerIcon/>
                <h1>food explorer</h1>
                
            </Background>

        </Container>

    );
}