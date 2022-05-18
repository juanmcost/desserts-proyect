import { Text } from "@chakra-ui/react";
import { Dessert } from "../Types/Desserts";

export default function DessertCard({dessert}:{dessert:Dessert}){

    return (
        <>
            <Text>
                {dessert.name}
            </Text>
        </>
    )
}