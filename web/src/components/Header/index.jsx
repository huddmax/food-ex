import { Button } from '../Button';
import { Container, Explorer } from './style';
import { SignOutIcon } from '../../assets/icons/SignOutIcon';
import { ExplorerIcon } from '../../assets/icons/ExplorerIcon';
import {  ReceiptIcon } from '../../assets/icons/ReceiptIcon';



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

            <input></input>

            <Button
                title="Pedidos (0)"
                icon={<ReceiptIcon/>}
            >
            </Button>
            
            
            <SignOutIcon/>
            
            
        </Container>
    )
}