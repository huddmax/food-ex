const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");
const UserRepository = require("../repositories/UserRepository.js");
const UserCreateService = require('../services/UserCreateService.js');

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);
        await userCreateService.execute({ name, email, password });

        return response.status(201).json();
    }


    async update(request, response) { 
        const { name, email, password, old_password } = request.body;
        const user_id = request.user.id;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        if (!user) {
            throw new AppError("Usuário não encontrado");
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("e-mail já está em uso");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password) {
           throw new AppError("voce precisa informar a senha antiga para definir uma nova")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError("A senha antiga não está correta")
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        update_at = DATETIME('now')
        WHERE id = ?`,
            [user.name, user.email, user.password, user_id]
        );

        return response.json();

    }   
}

module.exports = UsersController;












/* Um controller pode ter no maximo 5 metodos

1 - Index: GET para listar varios registros
2 - Show: GET para exibir um registro especifico
3 - Create: POST para criar um registro
4 - Update: PUT para atualizar um registro
5 - Delete: DELETE para remover um registro

Se precisar criar mais que 5 métodos é melhor criar um novo controller, 1 a 5 métodos apenas, essa é uma boa prática.
*/

