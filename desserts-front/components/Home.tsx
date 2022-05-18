import { useDesserts } from "../pages/api/api"
import { Spinner } from '@chakra-ui/react'
import DessertCard from "./DessertCard";

export default function Home(){
    const { isLoading, desserts, error } = useDesserts()

    if (isLoading) return (
        <Spinner />
    )

    if (error) {
        console.error(error);
    }

    return (
        <>
            {desserts?.map(dessert => (
                <DessertCard dessert={dessert} />
            ))}
        </>
    )
}