import { Container,All,Main,DishInfo } from './style';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { Tag } from '../../components/Tag';

import { api, getImageUrl } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

// import { menuItens } from '../Home';
// const selectedDish = menuItens.find((item)=>item.id==13)

export function DishPage() { 
    const [dish, setDish] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${id}`);
                setDish(response.data);
            } catch (error) {
                console.error("Erro ao buscar o prato:", error);
            }
        }
        fetchDish();
    }, [id]);
    

    return (
        <Container>
            <Header/>

            <All>

                <div onClick={goBack} >
                    <Button
                        title={"voltar"}
                        className="voltar"
                        icon={<LeftArrow />}
                    >
                      
                    </Button>
                </div>
                
                <Main>
                     <img src={getImageUrl(dish.image)} alt={dish.name}/>

                    <DishInfo>

                        <h2> {dish.name} </h2>
                        <p>{dish.description}</p>

                        <div className="tags">
                            <Tag title="alface"/>
                            <Tag title="cebola"/>
                            <Tag title="pão naan"/>
                            <Tag title="pepino"/>
                            <Tag title="rabanete"/>
                            <Tag title="tomate"/>
                            
                        </div>
                        
                        <div className="steeper">
                        <Stepper />
                        <Button title={"incluir R$ " + dish.price}/>
                        </div>
                        
                    </DishInfo>
                </Main>
            </All>

            <Footer/>
        </Container>
    )
}