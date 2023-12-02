"use client"
import { Layout, Button, MenuProps, Dropdown, Space, Avatar } from 'antd';
import Logo from "@/assets/svg/logo.svg"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { setEmail,setToken } from '@/store/slices/UserSlice';
import { useRouter } from 'next/navigation';
import { DEFAULT, HOME } from '@/router';
import { deleteCookie } from '@/utils/cookie.utils';
const { Header: LayoutHeader } = Layout;

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const email = useSelector((state: RootState) => state.user.email);
    
    if (!email) {
        return <></>
    }
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a href='javascript:;' onClick={() => {
                    window.localStorage.removeItem("email")
                    dispatch(setToken(null));
                    dispatch(setEmail(null));
                    deleteCookie("token")
                    router.push(DEFAULT)
                }} >
                    <Space >
                        <LogoutOutlined />
                        Çıkış
                    </Space>
                </a>
            ),
        },
    ];
    return (
        <LayoutHeader style={{ lineHeight: 0 }}>
            <Link href={"/home"}>
                <Image
                    height={65}
                    width={200}
                    priority
                    src={Logo}
                    alt="Logo"
                />
            </Link>
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar size={30} icon={<UserOutlined />} />
                        {email}
                    </Space>
                </a>
            </Dropdown>
        </LayoutHeader>)
}
export default Header;