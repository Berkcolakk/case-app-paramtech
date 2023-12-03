import CustomButton from "@/components/Button";
import CardList from "@/components/CardList";
import Wrapper from "@/components/Wrapper";
import { DEFAULT, PAYMENT, PAYMENT_RESULT } from "@/router";
import { GetAllPackages } from "@/services/Card";
import { RootState } from "@/store/store";
import { TCard } from "@/types/Card";
import { Divider, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const CardListContainer = () => {
    const router = useRouter();
    const { data, isLoading } = useQuery<TCard>('packages', GetAllPackages)
    const totalPrice = useSelector((state: RootState) => state.card.totalPrice);
    const cart = useSelector((state: RootState) => state.card.cart);


    return (
        <Wrapper>
            <CardList data={data} isLoading={isLoading} />
            <Divider></Divider>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h3>Seçilen Paket Tutarı: <b>{totalPrice}₺</b></h3>
                <CustomButton
                    onClick={() => {
                        if (cart.length === 0) {
                            message.info("Sepetiniz boşken ödeme bilgilerine geçemezsiniz.")
                            return;
                        }
                        router.push(PAYMENT)
                    }
                    }
                >Devam Et</CustomButton>
            </div>
        </Wrapper>
    )
}
export default CardListContainer;