"use client"
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Layout, Menu } from 'antd';
import Logo from "@/assets/svg/logo.svg"
import Image from 'next/image';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
const { Header: LayoutHeader } = Layout;

const Header = () => {
    const user = useSelector((state: RootState) => state.user.user);
    console.log(user);
    if (!user) {
        return <></>
    }
    return (
        <LayoutHeader >
            <Image
                priority
                src={Logo}
                alt="Page"
            />
        </LayoutHeader>)
}
export default Header;