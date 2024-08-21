import { RiShutDownLine } from 'react-icons/ri';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api.js';


import { Container, Profile, Logout } from './style.js';




export function Header() {
    const { signOut, user } = useAuth();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    const navigate = useNavigate();
    function navigateToProfile() {
        navigate("/Profile");
    }

    return (

        <Container>
             
            <Profile onClick={navigateToProfile}>
                <img
                    src={ avatarUrl }
                    alt={ user.name }
                    />

                <div>
                    <span>Bem Vindo!</span>
                    <strong> { user.name } </strong>
                </div>
            </Profile>
                   

            <Logout onClick={() => {navigate("/"), signOut()}}>
           <RiShutDownLine/>
            </Logout>
        </Container>

    );
}