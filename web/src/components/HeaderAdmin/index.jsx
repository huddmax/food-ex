import { Container, Explorer, Search } from './style';

import { Input } from '../Input';
import { Button } from '../Button';
import { SignOutIcon } from '../../assets/icons/SignOutIcon';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { ReceiptIcon } from '../../assets/icons/ReceiptIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';




export function HeaderAdmin() {
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
            <Input placeholder="Busque por pratos ou ingredientes" id="search">
            </Input>
            </Search>

            <Button
                title="Novo prato"
                // icon={<ReceiptIcon/>}
            >
            </Button>
            
            
            <SignOutIcon/>
            
            
        </Container>
    )
}