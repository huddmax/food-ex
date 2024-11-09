import { Container, All, Main, DishInfo } from './style';
import { Button } from '../../components/Button';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
// import { Stepper } from '../../components/Stepper';
import { menuItens } from '../Home';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { Tag } from '../../components/Tag';

import { useNavigate, useParams } from 'react-router-dom';
import { api, getImageUrl } from '../../services/api';
import { useEffect, useState } from 'react';


    export function DishPageAdmin() { 
    const [dish, setDish] = useState([]);
    const [tags, setTags] = useState([]);

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

                const responseTags = await api.get(`/tags/${id}`);
                setTags(responseTags.data);
            } catch (error) {
                console.error("Erro ao buscar o prato:", error);
            }
        }
        fetchDish();
    }, [id]);

  



    return (
        <Container>
            <HeaderAdmin/>

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
                    <img src={getImageUrl(dish.image)} alt={dish.name} />

                    <DishInfo>

                        <h2> {dish.name} </h2>
                        <p>{dish.description}</p>

                        <div className="tags">

                            {tags.map((tag) => (
                                <Tag title={tag.name} />
                            ))}
                            
                        </div>
                        
                        <div className="buttonEditDiv">
                        <Button title={"Editar prato"}/>
                        </div>
                        
                    </DishInfo>
                </Main>
            </All>

            <Footer/>
        </Container>
    )
}