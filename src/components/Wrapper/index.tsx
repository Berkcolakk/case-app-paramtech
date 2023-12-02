import { ReactNode } from "react";
import "@/assets/wrapper.scss"

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <main className="mainContainer">
            <section className="container">
                {children}
            </section>
        </main>
    )
}
export default Wrapper;