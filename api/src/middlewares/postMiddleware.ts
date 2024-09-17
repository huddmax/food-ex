import { Request, Response, NextFunction } from "express";

export function postMiddleware(request:Request, response:Response, next:NextFunction) {
    
    request.user_id = "POST"

    console.log("Passou pelo Middleware do método POST!")

    return next()
}