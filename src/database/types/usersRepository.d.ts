type UsersRepository = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: "customer" | "admin";
    created_at?: Date;
    updated_at?: Date;
}