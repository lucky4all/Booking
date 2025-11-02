"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { loginUser } from '@/lib/actions/auth'
import { LoginDto } from '@/assets/schema'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

import "@/styles/index.css"

export default function LoginPage() {
    
    const { register, handleSubmit } = useForm()
    const [renderError, setRenderError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    async function onSubmit(data: any): Promise<void> {
        let parsed = JSON.stringify(data) as unknown as LoginDto
        let operation = await loginUser(parsed)
        
        if (operation instanceof Error) {
            setRenderError(true)
            setErrorMessage(operation.message)
            return
        }
        if (operation.message !== 200) {
            setRenderError(true)
            setErrorMessage(typeof operation.message === 'string' ? operation.message : 'Error desconocido')
            return
        }
        setRenderError(false)
        setErrorMessage('')
        console.log(operation)
        router.push('/dashboard')
    }

    return (
        <div className='flex items-center justify-center'>
         <form onSubmit={handleSubmit(onSubmit)} id='login-form'>
            <h1>Iniciar Sesión</h1>
            <Label htmlFor='user'>Nombre de Usuario</Label>
            <input id='user' type="text" placeholder="Admin" {...register('username')} ></input>
            <Label htmlFor='password'>Contraseña</Label>
            <input id='password' type="password" placeholder="*******" {...register('password')}></input>
            { renderError && (
                <Alert variant="destructive" className='flex flex-col items-center justify-center'>
                    <AlertTitle>Ha ocurrido un error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
                ) }
            <Button size="lg" type='submit' variant="secondary">Enviar</Button>
         </form>
        </div>
    )
}