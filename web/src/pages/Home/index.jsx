import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Brand, Container, Menu, Img } from "./style";



export function Home() {

    let menuItens = [
        {
            id: 1,
            name: "Salada Ravanello",
            description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
            value: "49,97",
            img:"/src/assets/images/dishes/saladaRavanello.png",
            category:"meal",
    
        },
        {
            id: 2,
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            value: "25,97",
            img: "/src/assets/images/dishes/torradasDeParma.png",
            category:"meal",
    
        },
        {
            id: 3,
            name: "Spaguetti Gambe",
            description: "Massa fresca com camarões e pesto.",
            value: "79,97",
            img: "/src/assets/images/dishes/spaguettiGambe.png",
            category:"meal",
    
        },
        {
            id: 4,
            name: "Salada Ravanello",
            description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
            value: "49,97",
            img: "/src/assets/images/dishes/saladaRavanello.png",
            category:"meal",
    
        },
        {
            id: 5,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"dessert",
    
        },
        {
            id: 6,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"dessert",
    
        },
        {
            id: 7,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"dessert",
    
        },
        {
            id: 8,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"dessert",
    
        },
        {
            id: 9,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"drink",
    
        },
        {
            id: 10,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"drink",
    
        },
        {
            id: 11,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"drink",
    
        },
        {
            id: 12,
            name: "",
            description: "",
            value: ",97",
            img: "",
            category:"drink",
    
        },
     
    
    ];

    const meals = menuItens.filter(item => item.category === "meal");
    const desserts = menuItens.filter(item => item.category === "dessert");
    const drinks = menuItens.filter(item => item.category === "drink");
    

    return (
        <Container>

            <Header/>

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

                    {meals.map(dish => (
                        
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