export interface User {
    email: string,
    username: string,
    password: string,       //I assume this is going to be stored in a different way
    role: boolean,          //true for admin, false for cashier
}
