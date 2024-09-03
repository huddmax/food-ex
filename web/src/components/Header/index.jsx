import { Container, Explorer, Search } from './style';

import { Input } from '../Input';
import { Button } from '../Button';
import { SignOutIcon } from '../../assets/icons/SignOutIcon';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import { ReceiptIcon } from '../../assets/icons/ReceiptIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';




export function Header() {
    return (
        <Container>

            <Explorer>

                <ExplorerIcon />
                <div>
                    <h2>food explorer</h2>
                    {/* <span>Admin</span> */}
                </div>
            </Explorer>

            <Search>
            {/* <SignOutIcon/> */}
            <SearchIcon/>
            <Input placeholder="Busque por pratos ou ingredientes">
            </Input>
            </Search>

            <Button
                title="Pedidos (0)"
                icon={<ReceiptIcon/>}
            >
            </Button>
            
            
            <SignOutIcon/>
            
            
        </Container>
    )
}