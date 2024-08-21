import { Container } from './style.js';

export function Tag({ title, ...rest }){
    return (
        <Container {...rest}>
            {title}
        </Container>
    );
} 