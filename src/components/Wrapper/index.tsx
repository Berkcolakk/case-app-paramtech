import { ReactNode } from "react";
import "@/assets/wrapper.scss"

const Wrapper = ({ children, width }: { children: ReactNode; width: string }) => {
    return (
        <main className="mainContainer">
            <section className="container" style={{ width: width }}>
                {children}
            </section>
        </main>
    )
}
export default Wrapper;