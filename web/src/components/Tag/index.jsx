import { Container } from "./style";

export function Tag({title}) {
    return (
        <Container>
            <strong id={title}>
                {title}
            </strong>
        </Container>
    )
}