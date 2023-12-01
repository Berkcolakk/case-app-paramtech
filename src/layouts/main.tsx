"use client"
import { Layout, Space } from 'antd';
const { Content: Content } = Layout;
const Main = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            {children}
        </>
    )
}
export default Main;