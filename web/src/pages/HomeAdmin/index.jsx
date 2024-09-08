import { CardAdmin } from "../../components/CardAdmin";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Brand, Container, Menu, Img } from "./style";

import '@splidejs/splide/dist/css/splide.min.css';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { menuItens } from '../Home/index';
    
    const meals = menuItens.filter(item => item.category === "meal");
    const desserts = menuItens.filter(item => item.category === "dessert");
    const drinks = menuItens.filter(item => item.category === "drink");
    
export function HomeAdmin() {
    return (
        <Container>

            <HeaderAdmin/>

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
                        
                            <CardAdmin
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.value}
                                dishImg={dish.img}
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
                        
                            <CardAdmin
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.value}
                                dishImg={dish.img}
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
                        
                            <CardAdmin
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.value}
                                dishImg={dish.img}
                            />
                        </SplideSlide>
                    ))}
  
                </Splide>

            </Menu>
            <Footer/>
        </Container>
    )
}