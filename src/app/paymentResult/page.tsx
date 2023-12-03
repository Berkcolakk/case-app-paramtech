"use client"
import { HOME } from "@/router"
import { setCart } from "@/store/slices/CartSlice"
import { setCardHolderName, setCardNumber, setCvv, setExpireDate } from "@/store/slices/CreditCardSlice"
import { Result } from "antd"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const PaymentResult = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.removeItem("cart");
        dispatch(setCart([]))
        dispatch(setCardHolderName(""))
        dispatch(setCardNumber(0))
        dispatch(setCvv(""))
        dispatch(setExpireDate(""))

    }, [])

    return (
        <Result
            status="success"
            title="Ödemeniz başarıyla gerçekleşmiştir."
            extra={[
                <Link href={HOME} key="goBack">Geri Dön</Link>,
            ]}
        />
    )
}
export default PaymentResult;