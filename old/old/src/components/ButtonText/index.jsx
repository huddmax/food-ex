import { Container } from './style.js';

export function ButtonText({title, isactive = "false", ...rest}) {
    return (
        <Container type="button"
            $isactive = { isactive.toString() }
            {...rest}
        >
            {title}
        </Container>
    );
}