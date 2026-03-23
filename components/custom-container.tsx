import { Pressable } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    big?: boolean,
    onPress: () => void
}

export const CustomCotainer = ({ children, big, onPress }: Props) => {
    return(
        <Pressable
            className={big ? "w-full p-7 mx-6 mt-5 bg-[#DDD] rounded-2xl" : "p-5 mx-6 mt-5 bg-[#DDD] rounded-2xl"}
            onPress={onPress}
        >
            {children}
        </Pressable>
    )
}