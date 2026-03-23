import { Text } from "react-native"

type Props = {
    label: string,
    normal?: boolean,
    bold?: boolean,
    purple?: boolean
}

export const Description = ({ label, normal, bold, purple }: Props) => {
    return(
        <>
            {normal &&
                <Text className="text-black text-lg">{label}</Text>
            }

            {bold &&
                <Text className="text-black text-lg font-bold">{label}</Text>
            }

            {purple &&
                <Text className="text-nubank text-lg font-bold">{label}</Text>
            }
        </>
    )
}