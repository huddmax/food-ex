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
    const [imageFile, setImageFile] = useState(null);
    
    
    function handleFileChange(event) {
        const file = event.target.files[0];
        console.log("Arquivo Selecionado: ", file);
        if (file) {
            setImageFile(file);
        }
    }


    async function handleSaveChanges() {
        try {

            if (imageFile) {
                const formData = new FormData();
                formData.append("image", imageFile);
    
                console.log("Iniciando o upload da imagem...");
                const uploadResponse = await api.patch(`/dishes/image/${id}`, formData);
                console.log("Imagem atualizada com sucesso!", uploadResponse.data);
            }
    

        const dishData = {
            name: dishName,
            price: parseFloat(dishPrice),
            description: dishDescription,
            category: dishCategory,
        };

            await api.put(`/dishes/${id}`, dishData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Dados do prato atualizados com sucesso!");
            goHome();
        } catch (error) {
            console.error("Erro ao atualizar os dados do prato:", error);
        }
    }

    async function handleDeleteDish() { 
        try {
            await api.delete(`/dishes/${id}`);
            alert("Prato excluído com sucesso!");
            goHome();
        } catch (error) {
            console.error("Erro ao excluir o prato:", error);
        }
    }

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const goHome = () => { 
        navigate("/");
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
                            id="priceOfDish"
                            title="Preço"
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
                        <button
                            className="deleteButton"
                            onClick={handleDeleteDish}
                        >
                            Excluir prato
                        </button>

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