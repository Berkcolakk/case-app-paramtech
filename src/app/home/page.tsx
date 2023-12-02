"use client"
import "@/assets/login.scss"
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import { DEFAULT } from "@/router"
import CardList from "@/components/CardList"
import { useQuery } from "react-query"
import { GetAllPackages } from "@/services/Card"
import { TCard } from "@/types/Card"
import { getCookie } from "@/utils/cookie.utils"
import Wrapper from "@/components/Wrapper"
export default function Home() {
    const router = useRouter();
    const { data, isLoading } = useQuery<TCard>('packages', GetAllPackages)
    useEffect(() => {
        if (!"value") {
            router.push(DEFAULT)
        }
    }, ["value", router])
    return (
        <Wrapper>
            <CardList data={data} isLoading={isLoading} />
        </Wrapper>
    )
}
