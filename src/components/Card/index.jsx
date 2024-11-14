import { CardButtons, Container, DishDescription, DishImage, DishName, DishValue } from "./style";
import { FavoriteIcon } from "../../assets/icons/FavoriteIcon";
import { Stepper } from "../Stepper";
import { Button } from "../Button";



import { useNavigate } from "react-router-dom";

export function Card({id, dishName, dishDescription,dishValue,dishImg,onClickDish,...rest}) {

    const navigate = useNavigate();
  
    const goToDish = (id) => {
        navigate(`/dish/${id}`);
    };

    return (
        <Container >

            <FavoriteIcon />
            
            <DishImage
                src={dishImg}
                alt={dishName}
                onClick={onClickDish}
            />
           
            <DishName onClick={onClickDish}>
                <p> {dishName} &gt; </p>
            </DishName>

            <DishDescription onClick={onClickDish}>
                <p>{dishDescription}</p>
            </DishDescription>
            
            <DishValue>
                <p>R$ {dishValue} </p>
            </DishValue>

            <CardButtons>

                <Stepper />

                <Button title={"incluir"} />

            </CardButtons>

        </Container>


    )
}

