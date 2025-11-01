"use server"
import { cookies } from "next/headers"
import { ServerError, IncorrectCredentials } from "@/assets/customError"
import type { LoginDto } from "@/assets/schema"

export async function loginUser(body: LoginDto): Promise<{ success: boolean; message: string } | Error> {
    try {
        const username = body.username as string
        const password = body.password as string

        if (username === "Demo" && password === "root") {
            
            let fechaExpiracion: Date = new Date();
            
            fechaExpiracion.setDate(fechaExpiracion.getDate() + 30); // Expira en 30 días
            
            (await cookies()).set("token", "authenticated", { expires: fechaExpiracion, sameSite: "lax", secure: process.env.NODE_ENV === 'production', httpOnly: true });

            return { success: true, message: "Usuario logueado correctamente" }
        } else {
            return new IncorrectCredentials()
        }

    } catch (error) {
        return new ServerError()
    }

}