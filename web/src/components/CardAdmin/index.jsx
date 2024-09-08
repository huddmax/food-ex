import { CardButtons, Container, DishDescription, DishImage, DishName, DishValue } from "./style";
import { EditIcon } from "/src/assets/icons/EditIcon";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function CardAdmin({id, dishName, dishDescription,dishValue,dishImg,...rest}) {

    return (
        <Container>

            {/* <EditIcon className="EditIcon" /> */}
            <img src="/src/assets/icons/Pencil.svg" alt="Pencil" />
            <DishImage
                src={dishImg}
                alt={dishName}
            />
           
            <DishName>
                <p> {dishName} &gt; </p>
            </DishName>

            <DishDescription>
                <p>{dishDescription}</p>
            </DishDescription>
            
            <DishValue>
                <p>R$ {dishValue} </p>
            </DishValue>
        </Container>


    )
}

