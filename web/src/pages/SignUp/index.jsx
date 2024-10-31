import { useState } from 'react';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { Button } from '../../components/Button';
import {InputWithText} from '../../components/InputWithText'

import { Container, Form, Background } from './style';
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate("/");
    }


    async function handleSignUp(event) {
        event.preventDefault();
        if (!name || !email || !password) {
            return alert("Preencha todos os campos");
        }

        try {
            await api.post("/users", { name, email, password })
            alert("Usuário cadastrado com sucesso");
            goToLogin();

        } catch(error) {
            if (error.response) {
                alert(error.response.data.message);
            }
            else {
                alert("Erro ao cadastrar usuário");
            }
        };
    }

    
    return (
        <Container>
            <Form onSubmit={handleSignUp}>
             
                <h2>Crie sua conta</h2>
                
                <InputWithText  
                    title="Seu nome"
                    id="inputName"
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e=> setName(e.target.value)}
                />

                <InputWithText
                    title="Email"
                    id="inputEmail"
                    placeholder="Exemplo: exemplo@email.com.br" 
                    type="text" 
                    autoComplete="userName"
                    onChange={e=> setEmail(e.target.value)}
                />

                <InputWithText
                    title="Senha"
                    id="inputPassword"
                
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    autoComplete="current-password"
                    onChange={e=> setPassword(e.target.value)}

                />

                <Button
                    title="Criar Conta"
                    type="submit"
                />

                <p
                    onClick={goToLogin}
                >Já tenho uma conta</p>
                

            </Form>

            <Background>
                <ExplorerIcon/>
                <h1>food explorer</h1>
            </Background>

        </Container>

    );
}