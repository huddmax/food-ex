import { Container } from "./style";

export function Button({title,icon, onClick, ...rest}) {
    return (
        <Container type="button" onClick={onClick} {...rest}>
            {icon}
            {title}
            
        </Container>
    )
}