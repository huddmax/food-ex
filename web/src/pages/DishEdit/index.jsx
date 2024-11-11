import { Container, Main, Content, Description, DishesInfo, TagsAndPrice, FinalButtons  } from "./style";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Button } from "../../components/Button";
import { TagsBar } from "../../components/TagsBar";
import { InputWithText } from '../../components/InputWithText'

import { LeftArrow } from "../../assets/icons/LeftArrow";
import { UploadIcon } from '../../assets/icons/UploadIcon';

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";



export function DishEdit() {
    const { id } = useParams()
    const [dishName, setDishName] = useState("");
    const [dishCategory, setDishCategory] = useState("");
    const [dishPrice, setDishPrice] = useState("");
    const [dishDescription, setDishDescription] = useState("");


    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDishData() {
            try {
                const response = await api.get(`/dishes/${id}`);
                const { name, category, price, description } = response.data;

                setDishName(name);
                setDishCategory(category);
                setDishPrice(price);
                setDishDescription(description);
            } catch (error) {
                console.error("Erro ao buscar os dados do prato: ", error);
            }
        }

        fetchDishData();
    }, [id]);

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

            <h2>Editar Prato</h2>
            
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
                                placeholder="Salada Ceasar"
                                value={dishName}
                                onChange={(e) => setDishName(e.target.value)}
                            />

                    </div>
                       
                    <div id="category" >
                            <label htmlFor="dishCategory">Categoria</label>
                            <div className="selectWrapper">

                                <select
                                    id="dishCategory"
                                    value={dishCategory}
                                    onChange={(e) => setDishCategory(e.target.value)}
                                >
                                <option value="meal">Refeição</option>
                                <option value="dessert">Sobremesa</option>
                                <option value="drink">Bebida</option>
                                </select>
                                <img
                                    src="/src/assets/icons/DonwArrow/donwArrow.svg"
                                    alt="donwArrowIcon"
                                    className="selectIcon" />
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
                            onChange={(e) => setDishPrice(e.target.value)}
                        />
                        
                    </TagsAndPrice>

                <Description>
                        <label htmlFor="descriptionOfDish">Descrição</label>
                        <textarea
                            name="descriptionOfDish"
                            id="descriptionOfDish"
                            placeholder="A Salada César é uma opção refrescante para o verão."
                            value={dishDescription}
                            onChange={(e) => setDishDescription(e.target.value)}
                        />
                </Description>
                    
                <FinalButtons>
                        <button className="deleteButton">Excluir prato</button>
                        <button className="saveButton">Salvar alterações</button> 
                </FinalButtons>
                    
                
            </Main>
                </Content>

            <Footer/>
        </Container>
    )
}