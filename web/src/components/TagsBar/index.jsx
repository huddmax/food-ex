import { XIcon } from "../../assets/icons/XIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";

import { Container, TagsBarDiv } from "./style";

export function TagsBar() {
    return (
        <Container>

            <label htmlFor="tagsBarDiv">Ingredientes</label>

            <TagsBarDiv id="tagsBarDiv">

                <button className="seeAndRemoveTag" >
                    Pão Naan
                    <XIcon/>
                </button>

                <button className="addNewTag">
                    Adicionar
                    <PlusIcon/>
                </button>

            </TagsBarDiv>

        </Container>
    )
}