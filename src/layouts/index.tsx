"use client"
import Main from "./main";
import Header from "./header";
import "@/assets/index.scss"
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import ReduxProvider from "@/providers/ReduxProvider";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <ReduxProvider>
            <StyledComponentsRegistry>
                <Header />
                <Main>
                    {children}
                </Main>
            </StyledComponentsRegistry>
        </ReduxProvider>
    )
}
export default Layout;
export { Header }