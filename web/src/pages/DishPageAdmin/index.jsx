import { Container,All,Main,DishInfo } from './style';
import { Button } from '../../components/Button';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
// import { Stepper } from '../../components/Stepper';
import { menuItens } from '../Home';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { Tag } from '../../components/Tag';

import { useNavigate } from 'react-router-dom';

const selectedDish = menuItens.find((item)=>item.id==1)

export function DishPageAdmin() { 
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


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
                    <img src={selectedDish.img} alt={selectedDish.name} />

                    <DishInfo>

                        <h2> {selectedDish.name} </h2>
                        <p>{selectedDish.description}</p>

                        <div className="tags">
                            <Tag title="alface"/>
                            <Tag title="cebola"/>
                            <Tag title="pão naan"/>
                            <Tag title="pepino"/>
                            <Tag title="rabanete"/>
                            <Tag title="tomate"/>
                            
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