import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
export default ReactQueryProvider;