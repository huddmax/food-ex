import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Brand, Container, Menu, Img } from "./style";


export function Home() {
    return (
        <Container>

            <Header>
                
            </Header>

                <Img/>
            <Brand>
                
                <div>
                    <h2>Sabores inigualáveis</h2>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            </Brand>

            <Menu>

                <div>
                    <h2>Refeições</h2>
                </div>

                <div>

                    <Card>
                    </Card>
                    <Card>
                    </Card>
                    <Card>
                    </Card>
                    <Card>
                    </Card>
                    
                </div>
            </Menu>



            <Footer>

            </Footer>
        </Container>
    )
}