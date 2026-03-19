import { Pressable, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ComponentProps } from "react"

type Props = {
    label: string,
    iconName: ComponentProps<typeof Ionicons>['name'],
    badge?: string,
    onPress: () => void
}

export const OptionButton = ({ label, iconName, badge, onPress }: Props) => {
    return(
        <Pressable 
        className="items-center mr-1"
        onPress={onPress}>
            <View className="justify-center items-center p-8 bg-[#DDD] rounded-full">
                <Ionicons 
                    name={iconName}
                    color="#000"
                    size={27}
                />
            </View>
            <Text className="w-[90px] mt-3 text-lg font-semibold text-center">{label}</Text>
        </Pressable>
    )
}