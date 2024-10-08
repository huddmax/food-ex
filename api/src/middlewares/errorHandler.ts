import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";

export function errorHandler(error: any, request: Request, response: Response, _: NextFunction) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }



    return response.status(500).json({ message: error.message });
}