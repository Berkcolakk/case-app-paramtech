import { ICard } from "@/interfaces/Card";
import CustomCard from "../Card";
import { Row, Col, Space } from "antd";
import { TCard } from "@/types/Card";
const CardList = ({ data, isLoading }: {
    data?: TCard | undefined;
    isLoading: boolean;
}) => {
    
    return (
        <Row gutter={16} style={{ width: "600px" }}>
            {data?.allPackages?.map((item: ICard) => {
                return (
                    <Col key={item._id} span={12} >
                        <CustomCard {...item} />
                    </Col>
                )
            })}
        </Row>
    )
}
export default CardList;