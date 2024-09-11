import express from "express";

const PORT = 3333;

const app = express();

app.get("/users/:id/:user", (request, response) => {
    const { id, user } = request.params;

    response.send(`Usuário: ${user} com id: ${id}`)
})







app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))