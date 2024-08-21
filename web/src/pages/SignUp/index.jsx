import { useState } from 'react';
import { Button } from '../../components/Button';
import {InputWithText} from '../../components/InputWithText'

import { Link, useNavigate } from 'react-router-dom';


import { api } from '../../services/api';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Form, Background } from './styles';


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                }
                
                else {
                    alert("Não foi possivel cadastrar!");
                }
            });
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
                    onChange={e => setName(e.target.value)}
                
                />

                <InputWithText
                    title="Email"
                    id="inputEmail"
                
                    
                    placeholder="Exemplo: exemplo@email.com.br" 
                    type="text" 
                    onChange={e => setEmail(e.target.value)}
                />

                <InputWithText
                    title="Senha"
                    id="inputPassword"
                
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Criar Conta" onClick={handleSignUp} />
                    
                <Link to="/" >
                    Já tenho uma conta
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