"use client"
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Layout, Menu } from 'antd';
import Logo from "@/assets/svg/logo.svg"
import Image from 'next/image';
const { Header: LayoutHeader } = Layout;

const Header = () => {
    debugger
    const [user, setUser] = useLocalStorage('user', null)
    if (!user) {
        return <></>
    }
    return (<LayoutHeader >
        <Image
            priority
            src={Logo}
            alt="Page"
        />

    </LayoutHeader>)
}
export default Header;