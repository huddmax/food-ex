import { Container,All,Main,DishInfo } from './style';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';
import { menuItens } from '../Home';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { Tag } from '../../components/Tag';

const selectedDish = menuItens.find((item)=>item.id==1)

export function DishPage() {
    return (
        <Container>
            <Header/>

            <All>

                <div>
                    <Button title={"voltar"} className="voltar" icon={<LeftArrow/>}>
                      
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
                        
                        <div className="steeper">
                        <Stepper />
                        <Button title={"incluir R$ "+selectedDish.value}/>
                        </div>
                        
                    </DishInfo>
                </Main>
            </All>

            <Footer/>
        </Container>
    )
}