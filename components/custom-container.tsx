import { Pressable } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    onPress: () => void
}

export const CustomCotainer = ({ children, onPress }: Props) => {
    return(
        <Pressable
            className="p-5 mx-6 mt-5 bg-[#DDD] rounded-xl"
            onPress={onPress}
        >
            {children}
        </Pressable>
    )
}