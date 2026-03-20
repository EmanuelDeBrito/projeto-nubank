import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ComponentProps } from "react"

type Props = {
    label: string,
    iconName: ComponentProps<typeof Ionicons>['name'],
    iconColor: string,
    iconSize: number
}

export const InfoItem = ({ label, iconName, iconColor, iconSize }: Props) => {
    return(
        <View className="flex flex-row items-center gap-5">
            <Ionicons 
                name={iconName}
                color={iconColor}
                size={iconSize}
            />
            <Text className="text-black text-lg font-semibold">{label}</Text>
        </View>
    )
}