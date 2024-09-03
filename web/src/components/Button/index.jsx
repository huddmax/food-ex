import { Container } from "./style";

export function Button({title,icon,...rest}) {
    return (
        <Container type="button">
            {icon}
            {title}
        </Container>
    )
}