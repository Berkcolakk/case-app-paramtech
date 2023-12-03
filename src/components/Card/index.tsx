import { ICard } from "@/interfaces/Card";
import Image from "next/image";
import { ReactNode } from "react";
import "@/assets/card.scss"
import { Avatar, Badge, Divider, Space, Tag } from "antd";
import { Card as CardAntd } from "antd"
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCards } from "@/store/slices/CardSlice";
import { RootState } from "@/store/store";
import { b64e } from "@/utils/encrpytion.utils";
const Card = (props: ICard) => {
    const dispatch = useDispatch();
    const selectedCards = useSelector((state: RootState) => state.card.selectedCards);
    const existsItem = (currentId: string) => {
        return selectedCards.filter((item) => item._id === currentId).length
    }
    return (
        <CardAntd loading={props.isLoading} style={{
            backgroundColor: "#f2f2f2",
            margin: "5px",
            borderColor: existsItem(props._id) !== 0 ? "green" : ""
        }}
            onClick={() => {
                let newArr = [] as any;
                if (existsItem(props._id) !== 0) {
                    const arr = selectedCards.filter((item) => item._id !== props._id)
                    newArr = [...arr]
                } else {
                    newArr = [...selectedCards, props]
                }
                dispatch(setSelectedCards(newArr))
                localStorage.setItem("selectedCards", JSON.stringify(b64e(newArr)))
            }} >
            <Meta
                avatar={<Image src={props.imagePath} alt={props.name} width={50} height={50} />}
                title={<div style={{ display: "flex", justifyContent: "space-between" }}><h4><b>{props.name}</b></h4><b>{props.price}{props.currency}</b></div>}
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