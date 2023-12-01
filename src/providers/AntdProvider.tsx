import { ConfigProvider } from 'antd';
import theme from '@/config/themeConfig';
import { ReactNode } from 'react';
const AntdProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ConfigProvider theme={theme}>
            {children}
        </ConfigProvider>
    )

}
export default AntdProvider;