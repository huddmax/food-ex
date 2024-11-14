import { Container } from "./style";

export function InputWithText({ title, id, ...rest}) {
    return (
        <Container>
            
            <div className="input-group">
                <label htmlFor={id}>
                    {title}
                </label>

                <input
                    id={id}
                    {...rest}
                
                    />
                </div>
        </Container>

    )
}