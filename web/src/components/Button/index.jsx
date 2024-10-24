import { Container } from "./style";

export function Button({title,icon, onClick}) {
    return (
        <Container type="button" onClick={onClick} >
            {icon}
            {title}
            
        </Container>
    )
}