import { Pressable, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ReactNode } from "react"

type Props = {
    title: string,
    children: ReactNode,
    onPress: () => void
}

export const InfoButton = ({ title, children, onPress }: Props) => {
    return(
        <Pressable
            className="py-8 px-6"
            onPress={onPress}
        >
            <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl font-semibold">{title}</Text>
                <Ionicons 
                    name="arrow-forward"
                    color="#555"
                    size={24}
                />
            </View>
            <View className="mt-3">
                {children}
            </View>
        </Pressable>
    )
}