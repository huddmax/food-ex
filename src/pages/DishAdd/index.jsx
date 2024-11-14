import { Container, Main, Content, Description, DishesInfo, TagsAndPrice, FinalButtons  } from "./style";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Button } from "../../components/Button";
import { TagsBar } from "../../components/TagsBar";
import { InputWithText } from '../../components/InputWithText'

import { LeftArrow } from "../../assets/icons/LeftArrow";
import { UploadIcon } from '../../assets/icons/UploadIcon';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function DishAdd() {
    const [dishName, setDishName] = useState("");
    const [dishCategory, setDishCategory] = useState("meals");
    const [dishPrice, setDishPrice] = useState("");
    const [dishDescription, setDishDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    function handleFileChange(event) {
        const file = event.target.files[0];
        console.log("Arquivo selecionado:", file);
        if (file) {
            setImageFile(file);
        }
    }

    async function handleSaveChanges() {
        try {

            if (!dishName || !dishDescription || !dishPrice) {
                alert("Preencha todos os campos obrigatórios!");
                return;
            }


            let imageUrl = null;
    
            if (imageFile) {
                const formData = new FormData();
                formData.append("image", imageFile);
    
                console.log("Iniciando o upload da imagem...");
                const uploadResponse = await api.post(`/dishes/image`, formData);
                imageUrl = uploadResponse.data.imageUrl.replace("/files/", "");
                console.log("Imagem carregada com sucesso!", imageUrl);
            }
    
            const dishData = {
                name: dishName,
                price: parseFloat(dishPrice),
                description: dishDescription,
                category: dishCategory,
                image: imageUrl
            };

            console.log("Enviando dados do prato:", dishData);
            await api.post(`/dishes`, dishData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            alert("Novo prato criado com sucesso!");
            goHome();
    
        } catch (error) {
            console.error("Erro ao criar o novo prato:", error);
            alert("Erro ao criar o novo prato");
        }
    }

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const goHome = () => {
        navigate("/");
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
                            <input
                                type="file"
                                id="buttonUpload"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                />
                        <Button
                            id="buttonUpload"
                            icon={<UploadIcon/>}
                            title={"Selecione imagem"}
                            onClick={() => document.getElementById("buttonUpload").click()}    
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
                                <option value="meals">Refeição</option>
                                <option value="desserts">Sobremesa</option>
                                <option value="drinks">Bebida</option>
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
                        
                        <button
                            className="saveButton"
                            onClick={handleSaveChanges}
                        >
                            Salvar alterações
                        </button>

                        
                </FinalButtons>
                    
                
            </Main>
                </Content>

            <Footer/>
        </Container>
    )
}