import { Text } from "react-native"

type Props = {
    label: number | string,
    big?: boolean
}

export const PriceText = ({ label, big }: Props) => {
    return(
        <Text className={big ? "text-4xl font-semibold" : "text-3xl font-semibold"}>
            {typeof label == 'number' ? "R$ " + label.toFixed(2) : label}
        </Text>
    )
}