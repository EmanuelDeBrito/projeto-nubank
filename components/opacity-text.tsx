import { Text } from "react-native"

type Props = {
    label: string
}

export const OpacityText = ({ label }: Props) => {
    return(
        <Text className="text-gray-500/80 text-lg">{label}</Text>
    )
}