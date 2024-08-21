import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Form } from './styles';
import { Avatar } from './styles';
import { Container } from "./styles";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setpasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile });

        navigate(-1);
    }

    async function HandleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>

            <header>
                <button type="button" onClick={handleBack} >

                {/* <a href="/"> */}
                <FiArrowLeft />
                {/* </a> */}
                </button>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="foto do usuário"
                    />

                <label htmlFor="avatar">
                    <FiCamera />
                    
                    <input
                        id="avatar"
                        type="file"
                        onChange={HandleChangeAvatar}    
                        
                        
                    />

                </label>
                        </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={ e => setpasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={ e => setpasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />

            </Form>

        </Container>
    )

}