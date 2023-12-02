import CardList from "@/components/CardList";
import Wrapper from "@/components/Wrapper";
import { DEFAULT } from "@/router";
import { GetAllPackages } from "@/services/Card";
import { TCard } from "@/types/Card";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";

const CardListContainer = () => {
    const router = useRouter();
    const { data, isLoading } = useQuery<TCard>('packages', GetAllPackages)
    useEffect(() => {
        if (!"value") {
            router.push(DEFAULT)
        }
    }, ["value", router])
    return (
        <Wrapper>
            <CardList data={data} isLoading={isLoading} />
            <Divider></Divider>
            
        </Wrapper>  
    )
}
export default CardListContainer;