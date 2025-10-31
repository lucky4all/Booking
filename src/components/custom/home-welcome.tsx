import { Button } from "../ui/button"
import Link from "next/link"
export default function HomeWelcome() {
    return (
        <>
         <div className="mt-[20vh] flex flex-col items-center gap-6">
           <h1 className="text-6xl font-bold">Booking It.</h1>
           <p className="text-2xl">El sistema de gestión reservas que <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">necesitas</span>.</p>
           <div className="flex gap-x-5 font-bold">
            <Link href="/book">
                <Button size="lg" variant="default">Reservar</Button>
            </Link>

            <Link href="/dashboard">
                <Button size="lg"variant="destructive">Dashboard</Button>
            </Link>
           </div>
         </div>
        </>
    )
}