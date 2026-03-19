import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ComponentProps } from "react"

type Props = {
    name: ComponentProps<typeof Ionicons>['name'],
    color: string,
    size: number,
    background?: boolean,
    onPress: () => void
}

export const HeaderIcon = ({ name, color, size, background, onPress }: Props) => {
    return(
        <TouchableOpacity
            className={background ? 'justify-center items-center p-[14px] bg-white/25 rounded-full' : ''}
            onPress={onPress}
        >
            <Ionicons 
                name={name}
                color={color}
                size={size}
            />
        </TouchableOpacity>
    )
}