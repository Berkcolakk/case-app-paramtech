"use client"
import Main from "./main";
import Header from "./header";
import "@/assets/index.scss"
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <StyledComponentsRegistry>
            <Header />
            <Main>
                {children}
            </Main>
        </StyledComponentsRegistry>
    )
}
export default Layout;
export { Header }