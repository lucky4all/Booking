"use server"
import { cookies } from "next/headers"
import { ServerError, IncorrectCredentials } from "@/assets/customError"
import type { LoginDto } from "@/assets/schema"

export async function loginUser(body: LoginDto): Promise<{ success: boolean; message: number } | Error> {
    try {
        let bodyParsed = JSON.parse(body as unknown as string)
        const username = bodyParsed.username as string
        const password = bodyParsed.password as string

        if (username === "Demo" && password === "root") {
            
            let fechaExpiracion: Date = new Date();
            
            fechaExpiracion.setDate(fechaExpiracion.getDate() + 30); // Expira en 30 días
            
            (await cookies()).set("token", "authenticated", { expires: fechaExpiracion, sameSite: "lax", secure: process.env.NODE_ENV === 'production', httpOnly: true });

            return { success: true, message: 200 }
        } else {
            return new IncorrectCredentials()
        }

    } catch (error) {
        return new ServerError()
    }

}