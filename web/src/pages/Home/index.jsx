import { Card } from "../../components/Card";
import { DishDescription } from "../../components/Card/style";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Brand, Container, Menu, Img } from "./style";

let dishes = [
    {
        id: 1,
        name: "Torradas de Parma",
        description: "Presunto de parma e rúcula em um pão com fermentação natural.",
        value: "25,97",
        img:"../../assets/images/dishes/dish1.png",

    },
 

];


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

                    {dishes.map(dish => (
                        
                        <Card
                        key={dish.id}
                        dishName={dish.name}
                        dishDescription={dish.description}
                        dishValue={dish.value}
                        dishImg={dish.img}
                        >
                    </Card>
                    ))}
                 

                </div>
            </Menu>



            <Footer>

            </Footer>
        </Container>
    )
}