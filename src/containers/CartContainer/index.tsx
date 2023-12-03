import CustomButton from "@/components/Button"
import { RootState } from "@/store/store";
import { List, Space, Typography } from "antd"
import { useSelector } from "react-redux";

const CartContainer = () => {
    const selectedCards = useSelector((state: RootState) => state.card.cart);

    return (
        <div style={{ width: "300px" }} >
            <List
                header={<div>Sepetteki Paketler</div>}
                footer={<CustomButton>Ödeme Yap</CustomButton>}
                bordered
                dataSource={selectedCards}
                renderItem={(item) => (
                    <List.Item style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F2F2F2" }}>
                        <Typography.Text >{item.name}</Typography.Text><b> {item.price} {item.currency}</b>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default CartContainer