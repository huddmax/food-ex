import { Container, Main, Content, Description, DishesInfo, TagsAndPrice, FinalButtons  } from "./style";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Button } from "../../components/Button";
import { TagsBar } from "../../components/TagsBar";
import { InputWithText } from '../../components/InputWithText'

import { DonwArrow } from "../../assets/icons/DonwArrow";
import { LeftArrow } from "../../assets/icons/LeftArrow";
import { UploadIcon } from '../../assets/icons/UploadIcon';

import { useNavigate } from "react-router-dom";

import { useState } from "react";

export function DishAdd() {
    const [dishName, setDishName] = useState("");
    const [dishCategory, setDishCategory] = useState("");
    const [dishPrice, setDishPrice] = useState("");
    const [dishDescription, setDishDescription] = useState("");
    const [dishImage, setDishImage] = useState("");




    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <Container>
            <HeaderAdmin />
                <Content>

                <div
                    onClick={goBack}
                    id="divGoBackButton"
                >
                    <Button
                        id="goBackButton"
                        title={"voltar"}
                        className="voltar"
                        icon={<LeftArrow />}
                    >
                    </Button>
                </div>

            <h2>Adicionar Prato</h2>
            
            <Main>
                <DishesInfo>
                    <div id="Upload">
                        <label htmlFor="buttonUpload">Imagem do prato</label>
                        <Button
                            id="buttonUpload"
                            icon={<UploadIcon/>}
                            title={"Selecione imagem"}
                        />
                    </div>

 
                    <div id="dishName">
                        <label htmlFor="dishNameInput">Nome</label>
                            <input
                                type="text"
                                name="dishNameInput"
                                id="dishNameInput"
                                placeholder="Ex: Salada Ceasar"
                                value={dishName}
                                onChange={e => setDishName(e.target.value)}
                            />
                    </div>
                       
 

                    <div id="category" >
                            <label htmlFor="dishCategory">Categoria</label>
                            <div className="selectWrapper">

                                <select
                                    id="dishCategory"
                                    name="dishCategory"
                                    value={dishCategory}
                                    onChange={e => setDishCategory(e.target.value)}
                                >
                                <option value="meal">Refeição</option>
                                <option value="dessert">Sobremesa</option>
                                <option value="drink">Bebida</option>
                                </select>
                                <img
                                    src="/src/assets/icons/DonwArrow/donwArrow.svg"
                                    alt="donwArrowIcon"
                                    className="selectIcon" />
                            {/* <DonwArrow className="selectIcon" /> */}
                            </div>
                    </div>

                    </DishesInfo>
                    




                    <TagsAndPrice>

                        <TagsBar />
                        
                        <InputWithText
                            className="price"
                            id={"priceOfDish"}
                            title={"Preço"}
                            placeholder="R$ 00,00"
                            value={dishPrice}
                            onChange={e => setDishPrice(e.target.value)}
                        />
                        
                    </TagsAndPrice>
                    




                <Description>
                        <label htmlFor="descriptionOfDish">Descrição</label>
                        <textarea
                            name="descriptionOfDish"
                            id="descriptionOfDish"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            value={dishDescription}
                            onChange={e => setDishDescription(e.target.value)}
                        />
                </Description>
                    
                <FinalButtons>
                        
                        <button className="saveButton">Salvar alterações</button>

                        
                </FinalButtons>
                    
                
            </Main>
                </Content>

            <Footer/>
        </Container>
    )
}