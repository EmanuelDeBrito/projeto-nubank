import { SafeAreaView, View, Text } from "react-native"
import { HeaderIcon } from "./header-icon"
import React from "react"

type Props = {
    balanceShown: boolean,
    setBalanceShown: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Header = ({ balanceShown, setBalanceShown }: Props) => {
    
    const handleShownBalance = () => { 
        setBalanceShown(!balanceShown)
    }

    return(
        <SafeAreaView>
            <View className="py-11 px-6 bg-nubank">
                <View className="flex flex-row justify-between items-center">
                    <View>
                        <HeaderIcon 
                            name="person-outline"
                            color="#FFF"
                            size={24}
                            background
                            onPress={() => {}}
                        />
                    </View>

                    <View className="flex flex-row items-center gap-6">
                        {balanceShown &&
                            <HeaderIcon 
                                name="eye-outline"
                                color="#FFF"
                                size={28}
                                onPress={handleShownBalance}
                            />
                        }
                        {!balanceShown &&
                            <HeaderIcon 
                                name="eye-off-outline"
                                color="#FFF"
                                size={28}
                                onPress={handleShownBalance}
                            />
                        }
                        <HeaderIcon 
                            name="help-circle-outline"
                            color="#FFF"
                            size={28}
                            onPress={() => {}}
                        />
                        <HeaderIcon 
                            name="mail-unread-outline"
                            color="#FFF"
                            size={28}
                            onPress={() => {}}
                        />
                    </View>
                </View>

                <View className="mt-9">
                    <Text className="text-white text-2xl font-semibold">Olá, Emanuel</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}