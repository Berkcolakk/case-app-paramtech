"use client"
import Main from "./main";
import Header from "./header";
import "@/assets/index.scss"
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <ReactQueryProvider>
            <ReduxProvider>
                <StyledComponentsRegistry>
                    <Header />
                    <Main>
                        {children}
                    </Main>
                </StyledComponentsRegistry>
            </ReduxProvider>
        </ReactQueryProvider>
    )
}
export default Layout;
export { Header }