import { Container, Explorer, Search, Dropdown } from './style';

import { Input } from '../Input';
import { Button } from '../Button';
import { SignOutIcon } from '../../assets/icons/SignOutIcon';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { ReceiptIcon } from '../../assets/icons/ReceiptIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';

import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useState } from 'react';

export function HeaderAdmin() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleSearchChange = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            console.log('Buscando pratos:', value);
            try {
                const response = await api.get(`dishes/search/s?name=${value}`);
                setSearchResults(response.data);
                setDropdownVisible(true); // Exibir dropdown com resultados
            } catch (error) {
                console.error('Erro ao buscar pratos:', error);
            }
        } else {
            setDropdownVisible(false);
        }
    };


    const { signOut } = useAuth();
    
    const navigate = useNavigate();
   
    const goToDishAdd = () => {
        navigate("/dishadd");
    };





    return (
        <Container>

            <Explorer>

                <ExplorerIcon />
                <div>
                    <h2>food explorer</h2>
                    <span>admin</span>
                </div>
            </Explorer>

            <Search htmlFor="search" >
            <SearchIcon/>
                <Input
                    placeholder="Busque por pratos ou ingredientes"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    autoComplete="off"
                />
                
                {isDropdownVisible && (
                    <Dropdown>
                        {searchResults.length > 0 ? (
                            searchResults.map((dish) => (
                                <div
                                    key={dish.id}
                                    className="dropdown-item"
                                    onClick={() => navigate(`/dish/${dish.id}`)}
                                >
                                    {dish.name}
                                </div>
                            ))
                        ) : (
                            <div className="dropdown-item">Nenhum prato encontrado</div>
                        )}
                    </Dropdown>
                )}


            </Search>

            <Button
                title="Novo prato"
                onClick={goToDishAdd}
                // icon={<ReceiptIcon/>}
            >
            </Button>
            
            <div
                onClick={signOut}
            >

            <SignOutIcon
                />
                </div>
            
            
        </Container>
    )
}