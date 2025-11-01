"use server"
import { cookies } from "next/headers"

export async function loginUser(body: any): Promise<any> {
    try {
        let data:any = JSON.parse(body)
        console.log(data)
        if (data.username === "Demo" && data.password === "root") {
            
            let fechaExpiracion: Date = new Date();
            
            fechaExpiracion.setDate(fechaExpiracion.getDate() + 30); // Expira en 1 día
            
            (await cookies()).set("token", "123456", { expires: fechaExpiracion });
            
            return { success: true, message: "Usuario logueado correctamente" }
        } else {
            throw new Error("Body incorrecto")
        }

    } catch (error) {
        return error;
    }

}