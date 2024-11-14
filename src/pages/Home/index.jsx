import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Brand, Container, Menu, Img } from "./style";

import { useNavigate } from "react-router-dom";

import { api, getImageUrl } from "../../services/api";


import '@splidejs/splide/dist/css/splide.min.css';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { useEffect, useState } from "react";
    
//apagar isso quando não tiver mais usando em outras pages
export const menuItens = [
    {
        id: 1,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
        value: "49,97",
        img:"/src/assets/images/dishes/saladaRavanello.png",
        category:"meal",

    },
    // {
    //     id: 2,
    //     name: "Torradas de Parma",
    //     description: "Presunto de parma e rúcula em um pão com fermentação natural.",
    //     value: "25,97",
    //     img: "/src/assets/images/dishes/torradasDeParma.png",
    //     category:"meal",

    // },
    // {
    //     id: 3,
    //     name: "Spaguetti Gambe",
    //     description: "Massa fresca com camarões e pesto.",
    //     value: "79,97",
    //     img: "/src/assets/images/dishes/spaguettiGambe.png",
    //     category:"meal",

    // },
    // {
    //     id: 4,
    //     name: "Salada Molla",
    //     description: "Massa fresca com camarões e pesto.",
    //     value: "69,97",
    //     img: "/src/assets/images/dishes/saladaMolla.png",
    //     category:"meal",

    // },
    // {
    //     id: 5,
    //     name: "Prugna Pie",
    //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    //     value: "79,97",
    //     img: "/src/assets/images/dishes/prugnaPie.png",
    //     category:"dessert",

    // },
    // {
    //     id: 6,
    //     name: "Peachy Pastrie",
    //     description: "Delicioso folheado de pêssego com folhas de hortelã.",
    //     value: "32,97",
    //     img: "/src/assets/images/dishes/peachyPastrie.png",
    //     category:"dessert",

    // },
    // {
    //     id: 7,
    //     name: "Macarons",
    //     description: "Farinha de amêndoas, manteiga, claras e açúcar.",
    //     value: "79,97",
    //     img: "/src/assets/images/dishes/macarons.png",
    //     category:"dessert",

    // },
    // {
    //     id: 8,
    //     name: "Bolo de damasco",
    //     description: "Damascos frescos em uma massa sem glúten.",
    //     value: "19,97",
    //     img: "/src/assets/images/dishes/boloDeDamasco.png",
    //     category:"dessert",

    // },
    // {
    //     id: 9,
    //     name: "Espresso",
    //     description: "Café cremoso feito na temperatura e pressões perfeitas.",
    //     value: "15,97",
    //     img: "/src/assets/images/dishes/espresso.png",
    //     category:"drink",

    // },
    // {
    //     id: 10,
    //     name: "Suco de Maracujá",
    //     description: "Suco de maracujá gelado, cremoso, docinho.",
    //     value: "13,97",
    //     img: "/src/assets/images/dishes/sucoDeMaracuja.png",
    //     category:"drink",

    // },
    // {
    //     id: 11,
    //     name: "Tè d'autunno",
    //     description: "Chá de anis, canela e limão. Sinta o outono italiano.",
    //     value: "19,97",
    //     img: "/src/assets/images/dishes/teDAutunno.png",
    //     category:"drink",

    // },
    // {
    //     id: 12,
    //     name: "Pomo Bourbon",
    //     description: "Maçã, whisky, canela. On the rocks.",
    //     value: "69,69",
    //     img: "/src/assets/images/dishes/pomoBourbon.png",
    //     category:"drink",

    // },
    {
        id: 13,
        name: "teste",
        description: "teste",
        value: "teste",
        img: "teste",
        category:"teste",

    },
 

];

export function Home() {
    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);



    const navigate = useNavigate();
  
    const goToDish = (id) => {
        navigate(`/dish/${id}`);
    };

    useEffect(() => {
        async function fetchDishes() {
            try {        
                const response = await api.get("/dishes");
                const dishes = response.data;
                
                setMeals(dishes.filter(dish => dish.category === "meals"));
                setDesserts(dishes.filter(dish => dish.category === "desserts"));
                setDrinks(dishes.filter(dish => dish.category === "drinks"));
            } catch (error) {
                console.error("Error fetching dishes", error);
            }
        }
    
        fetchDishes();
    }, []);

    return (
        <Container>

            <Header/>

            <Brand>
                <Img/>
                
                <div className="text">
                    <h2>Sabores inigualáveis</h2>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            </Brand>

            <Menu>

                <div>
                    <h2>Refeições</h2>
                </div>

                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4, 
                        focus: 'start', 
                        gap: 'rem',
                        pagination: true, 
                        arrows: true, 
                    }}>
                    
                    {meals.map((dish) => (
                        <SplideSlide key={dish.id}>
                        
                            <Card
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}

                                onClickDish={()=>goToDish(dish.id)}
                            />
                        </SplideSlide>
                    ))}
  
                </Splide>

            </Menu>
            <Menu>

                <div>
                    <h2>Sobremesas</h2>
                </div>

                <Splide
                    options={{
                        type: 'loop', 
                        perPage: 4, 
                        focus: 'start', 
                        gap: 'rem',
                        pagination: true, 
                        arrows: true, 
                    }}>
                    
                    {desserts.map((dish) => (
                        <SplideSlide key={dish.id}>
                        
                            <Card
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}
                                onClickDish={()=>goToDish(dish.id)}
                            />
                        </SplideSlide>
                    ))}
  
                </Splide>

            </Menu>
            <Menu>

                <div>
                    <h2>Bebidas</h2>
                </div>

                <Splide
                    options={{
                        type: 'loop', 
                        perPage: 4, 
                        focus: 'start',
                        gap: 'rem',
                        pagination: true, 
                        arrows: true, 
                    }}>
                    
                    {drinks.map((dish) => (
                        <SplideSlide key={dish.id}>
                        
                            <Card
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}
                                onClickDish={()=>goToDish(dish.id)}
                            />
                        </SplideSlide>
                    ))}
  
                </Splide>

            </Menu>



            <Footer>

            </Footer>
        </Container>
    )
}