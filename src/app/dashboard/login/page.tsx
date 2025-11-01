"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"

import "@/styles/index.css"

export default function LoginPage() {
    
    const { register, handleSubmit } = useForm()
    const [renderSucess, setRenderSucess] = useState(false)
    const router = useRouter()

    return (
        <div className='flex items-center justify-center'>
         <form id='login-form'>
            <h1>Iniciar Sesión</h1>
            <Label htmlFor='user'>Nombre de Usuario</Label>
            <input id='user' type="text" placeholder="Admin" {...register('usuario')} ></input>
            <Label htmlFor='password'>Contraseña</Label>
            <input id='password' type="password" placeholder="*******" {...register('contraseña')}></input>
            <Button type='submit' variant="secondary">Enviar</Button>
         </form>
        </div>
    )
}