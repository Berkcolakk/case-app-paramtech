"use client"
import LoginContainer from '@/containers/LoginContainer'
import "@/assets/login.scss"
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import { HOME } from '@/router'
import { getCookie } from '@/utils/cookie.utils'
import Wrapper from '@/components/Wrapper'

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (!"value") {
      router.push(HOME)
    }
  }, ["value"])
  return (
    <Wrapper>
      <LoginContainer />
    </Wrapper>
  )
}
