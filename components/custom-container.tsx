import { Pressable } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    onPress: () => void
}

export const CustomCotainer = ({ children, onPress }: Props) => {
    return(
        <Pressable
            className="p-3 mt-3 bg-[#DDD] rounded-lg"
            onPress={onPress}
        >
            {children}
        </Pressable>
    )
}