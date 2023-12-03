import { ReactNode } from "react";
import "@/assets/doubleWrapper.scss"
import { Space } from "antd";

const DoubleWrapper = ({ mainContainer, secondryContainer, mainContainerWidth, secondryContainerWidth }: { mainContainer: ReactNode; secondryContainer: ReactNode; mainContainerWidth: string; secondryContainerWidth: string; }) => {
    return (
        <main className="mainContainer">
            <section className="containerWrapper1" style={{ width: mainContainerWidth,marginLeft:"auto" }}>
                {mainContainer}
            </section>
            <section className="containerWrapper2" style={{ width: secondryContainerWidth,marginRight:"auto" }}>
                {secondryContainer}
            </section>
        </main>
    )
}
export default DoubleWrapper;