import { SafeAreaView, View, Text } from "react-native"
import { HeaderIcon } from "./header-icon"

export const Header = () => {
    const handleProfile = () => { }

    const handleEye = () => { }

    const handleQuestion = () => { }

    const handleMessage = () => { }

    return(
        <SafeAreaView>
            <View className="py-11 px-8 bg-nubank">
                <View className="flex flex-row justify-between items-center">
                    <View>
                        <HeaderIcon 
                            name="person-outline"
                            color="#FFF"
                            size={24}
                            background
                            onPress={handleProfile}
                        />
                    </View>

                    <View className="flex flex-row items-center gap-6">
                        <HeaderIcon 
                            name="eye-outline"
                            color="#FFF"
                            size={28}
                            onPress={handleEye}
                        />
                        <HeaderIcon 
                            name="help-circle-outline"
                            color="#FFF"
                            size={28}
                            onPress={handleQuestion}
                        />
                        <HeaderIcon 
                            name="mail-unread-outline"
                            color="#FFF"
                            size={28}
                            onPress={handleMessage}
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