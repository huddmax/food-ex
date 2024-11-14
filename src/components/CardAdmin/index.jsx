import { CardButtons, Container, DishDescription, DishImage, DishName, DishValue } from "./style";
import { EditIcon } from "/src/assets/icons/EditIcon";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function CardAdmin({id, dishName, dishDescription,dishValue,dishImg,onClickDish,onClickDishEdit,...rest}) {

    return (
        <Container>

            <img
                src="/src/assets/icons/Pencil.svg"
                alt="Pencil"
                style={{ cursor: 'pointer' }}
                onClick={onClickDishEdit}
            />

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
        </Container>


    )
}

