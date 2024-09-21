import { Request, Response, NextFunction } from "express";

export function myMiddleware(request:Request, response:Response, next:NextFunction) {
    
    request.user_id = "1234"

    console.log("Você passou pelo Middleware GLOBAL!")

    return next()
}