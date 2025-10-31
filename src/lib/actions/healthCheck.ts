"use server"

export async function healthCheck(): Promise<void> {
    console.log("Si, estoy vivo del lado del servidor")
}