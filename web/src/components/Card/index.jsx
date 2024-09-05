import { CardButtons, Container, DishDescription, DishImage, DishName, DishValue } from "./style";
import { FavoriteIcon } from "../../assets/icons/FavoriteIcon";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Card({id, dishName, dishDescription,dishValue,dishImg,...rest}) {

    return (
        <Container>

            <FavoriteIcon />
            
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

            <CardButtons>

                <Stepper />

                <Button title={"incluir"} />

            </CardButtons>

        </Container>


    )
}

