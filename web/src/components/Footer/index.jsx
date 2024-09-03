import { Container, Explorer, Corp } from "./style";
import { ExplorerIcon } from "../../assets/icons/ExplorerIcon";

export function Footer() {
    return (
        <Container>
            <Explorer>
                <ExplorerIcon />
                <div>
                <h2>food explorer</h2>
                </div>
            </Explorer>

            <Corp>
                <p>© 2024 - Todos os direitos reservados.</p>
            </Corp>

            

        </Container>
    )
}