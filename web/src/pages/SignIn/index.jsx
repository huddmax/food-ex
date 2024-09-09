
import { InputWithText } from '../../components/InputWithText'
import { Button } from '../../components/Button';

import { Container, Background, Form } from './style';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';

import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const navigate = useNavigate();
    const goToSignUp = () => {
        navigate("/register");
    }
    return (
        <Container>
            <Form>
                
                
                <h2>Faça Login</h2>

                <InputWithText
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    id="inputEmail"
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

                
                <Button title="Entrar"/>
                    
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