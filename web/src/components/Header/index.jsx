import { Container, Explorer, Search } from './style';

import { Input } from '../Input';
import { Button } from '../Button';
import { SignOutIcon } from '../../assets/icons/SignOutIcon';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { ReceiptIcon } from '../../assets/icons/ReceiptIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';

import { useNavigate } from "react-router-dom";



export function Header() {
    
    const navigate = useNavigate();
    const goToSignIn = () => {
        navigate("/login");
    };
    const goToDish = () => {
        navigate("/dish");
    };

    return (
        <Container>

            <Explorer>

                <ExplorerIcon />
                <div>
                    <h2>food explorer</h2>
                </div>
            </Explorer>

            <Search htmlFor="search" >
            <SearchIcon/>
            <Input placeholder="Busque por pratos ou ingredientes" id="search">
            </Input>
            </Search>

            <div onClick={goToDish}>
                <Button
                    title="Pedidos (0)"
                    icon={<ReceiptIcon />}
                    >
                </Button>
            </div>
            
            <div onClick={goToSignIn}>
            <SignOutIcon/>
            </div>
            
            
        </Container>
    )
}