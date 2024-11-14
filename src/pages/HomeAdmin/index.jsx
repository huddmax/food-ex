import { CardAdmin } from "../../components/CardAdmin";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Brand, Container, Menu, Img } from "./style";

import '@splidejs/splide/dist/css/splide.min.css';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { useEffect, useState } from "react";
import { api, getImageUrl } from "../../services/api";
import { useNavigate } from "react-router-dom";
    
export function HomeAdmin() {
    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);



    const navigate = useNavigate();
    
    const goToDishEdit = (id) => {
        navigate(`/dishedit/${id}`);
    };
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
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}
                                onClickDishEdit={()=>goToDishEdit(dish.id)}
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
                        
                            <CardAdmin
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}
                                onClickDishEdit={()=>goToDishEdit(dish.id)}
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
                        
                            <CardAdmin
                                dishName={dish.name}
                                dishDescription={dish.description}
                                dishValue={dish.price}
                                dishImg={getImageUrl(dish.image)}
                                onClickDishEdit={()=>goToDishEdit(dish.id)}
                                onClickDish={()=>goToDish(dish.id)}
                            />
                        </SplideSlide>
                    ))}
  
                </Splide>

            </Menu>
            <Footer/>
        </Container>
    )
}