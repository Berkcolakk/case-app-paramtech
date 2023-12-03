import { ICard } from "@/interfaces/Card";
import Image from "next/image";
import { ReactNode } from "react";
import "@/assets/card.scss"
import { Avatar, Badge, Divider, Space, Tag } from "antd";
import { Card as CardAntd } from "antd"
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/store/slices/CartSlice";
import { RootState } from "@/store/store";
const Card = (props: ICard) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.card.cart);
    const existsItem = (currentId: string) => {
        return cart.filter((item) => item._id === currentId).length
    }
    const clickHandle = () => {
        let newArr = [] as any;
        if (existsItem(props._id) !== 0) {
            const arr = cart.filter((item) => item._id !== props._id)
            newArr = [...arr]
        } else {
            newArr = [...cart, props]
        }
        dispatch(setCart(newArr))
        window.localStorage.setItem("cart", JSON.stringify(newArr))
    }
    const cardStle = {
        backgroundColor: "#f2f2f2",
        margin: "5px",
        borderColor: existsItem(props._id) !== 0 ? "green" : "",
        height:"160px"
    }
    return (
        <CardAntd loading={props.isLoading} style={cardStle}
            onClick={clickHandle} >
            <Meta
                avatar={<Image objectFit="cover" src={props.imagePath} alt={props.name} width={70} height={70} />}
                title={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <b>{props.name}</b><b>{props.price}{props.currency}</b>
                    </div>}
                description={
                    <>
                        <Space>
                            {props.details.map((item, index) => {
                                return <Space key={index} size={8}><Badge status="default" /> item</Space>
                            })}
                        </Space>
                        <Space><a style={{ fontSize: "10px", color: "#3cc8c3" }}>Paket Detayını Görüntüle</a></Space>
                        <div style={{ borderBottom: "1px solid #c4c4c4" }}></div>
                        {props.tags.map((item, index) => {
                            return <Space key={index} size={3}><Tag>{item}</Tag></Space>
                        })}

                    </>
                }
            />
        </CardAntd>
    )
}
export default Card;