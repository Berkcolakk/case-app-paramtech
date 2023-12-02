"use client"
import "@/assets/login.scss"
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import { DEFAULT } from "@/router"
export default function Home() {
    const router = useRouter();
    const [user] = useLocalStorage('user', undefined)

    useEffect(() => {
        if (!user) {
            router.push(DEFAULT)
        }
    }, [user, router])
    return (
        <main className='mainContainer'>
            Gerçek Home
        </main>
    )
}
