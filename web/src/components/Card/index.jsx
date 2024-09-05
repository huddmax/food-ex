import { Container, DishDescription, DishImage, DishName, DishValue } from "./style";
import { FavoriteIcon } from "../../assets/icons/FavoriteIcon";
import { Stepper } from "../Stepper";



export function Card({id, dishName, dishDescription,dishValue,dishImg,...rest}) {
    console.log(`aqui na function card está retornando ${dishName}`)
    return (
        <Container>

            <FavoriteIcon />
            
            <DishImage
                // src={dishImg}
                src="../../assets/images/dishes/dish1.png"
                alt={dishName}
                />
           

            <DishName>
                {/* <p> Torradas de Parma &gt; </p> */}
                <p> {dishName} &gt; </p>
            </DishName>

            <DishDescription>
                {/* <p>Presunto de parma e rúcula em um pão com fermentação natural.</p> */}
                <p>{dishDescription}</p>
            </DishDescription>
            
            <DishValue>
                {/* <p>R$ 25,97</p> */}
                <p>R$ {dishValue} </p>
            </DishValue>

            <Stepper/>


        </Container>


    )
}

