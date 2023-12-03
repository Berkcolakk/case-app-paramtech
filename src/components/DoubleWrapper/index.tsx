import { ReactNode } from "react";
import "@/assets/doubleWrapper.scss"

const DoubleWrapper = ({ mainContainer, SecondryContainer }: { mainContainer: ReactNode; SecondryContainer: ReactNode }) => {
    return (
        <main className="mainContainer">
            <section className="container">
                {mainContainer}
            </section>
            <section className="container">
                {SecondryContainer}
            </section>
        </main>
    )
}
export default DoubleWrapper;