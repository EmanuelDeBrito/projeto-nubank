import { StatusBar, SafeAreaView, ScrollView, View } from "react-native"
import { Header } from "../components/header"
import { InfoButton } from "../components/info-button"
import { PriceText } from "../components/price-text"
import { OptionButton } from "../components/option-button"
import { CustomCotainer } from "../components/custom-container"
import { InfoItem } from "../components/info-item"
import { Description } from "../components/description"
import { OpacityText } from "../components/opacity-text"
import { Line } from "../components/line"
import { useState } from "react"

const Screen = () => {
    const [balance, setBalance] = useState<number | string>(1200)
    const [balanceShown, setBalanceShown] = useState(true)

    console.log(StatusBar.currentHeight)

    return(
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#820ad1" }} /> 

            <ScrollView className="h-screen">
                <StatusBar 
                    barStyle={"light-content"}
                    backgroundColor={"#820ad1"}    
                />
                <Header
                    balanceShown={balanceShown}
                    setBalanceShown={setBalanceShown}
                />
                <InfoButton
                    title="Saldo da Conta"
                    onPress={() => {}}
                >
                    {balanceShown &&
                        <PriceText label={balance} />
                    }
                    {!balanceShown &&
                        <PriceText 
                            label={'*'.repeat(String(balance).length)}
                            big
                        />
                    }
                </InfoButton>
                <ScrollView
                    className="pl-6"
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <OptionButton 
                        label="Pix"
                        iconName="cash-outline"
                        onPress={() => { }}
                    />
                    <OptionButton 
                        label="Pagar"
                        iconName="barcode-outline"
                        onPress={() => { }}
                    />
                    <OptionButton 
                        label="Pegar Empréstimo"
                        iconName="wallet-outline"
                        badge="R$ 20.000"
                        onPress={() => { }}
                    />
                    <OptionButton 
                        label="Cartão"
                        iconName="card-outline"
                        onPress={() => { }}
                    />
                    <OptionButton 
                        label="Comprar"
                        iconName="cart-outline"
                        onPress={() => { }}
                    />
                </ScrollView>
                <CustomCotainer
                    onPress={() => {}}
                >
                    <InfoItem
                        label="Meus cartões"
                        iconName="albums-outline"
                        iconColor="#000"
                        iconSize={26}
                    />
                </CustomCotainer>
                <ScrollView
                    className="pl-6"
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <View className="w-96 mr-4">
                        <CustomCotainer 
                            big
                            onPress={() => {}}
                        >
                            <View className="flex flex-row flex-wrap gap-x-1">
                                <Description 
                                    label="Você tem"
                                    normal
                                />
                                <Description 
                                    label="R$ 12.000,00"
                                    bold
                                />
                                <Description 
                                    label="disponíveis para empréstimo."
                                    normal
                                />
                            </View>
                        </CustomCotainer>
                    </View>
                    <View className="w-96">
                        <CustomCotainer 
                            big
                            onPress={() => {}}
                        >
                            <View className="flex flex-row flex-wrap gap-x-1">
                                <Description 
                                    label="Guarde dinheiro"
                                    purple
                                />
                                <Description 
                                    label="no cofrinho"
                                    normal
                                />
                                <Description 
                                    label="Toque aqui para guardar."
                                    normal
                                />
                            </View>
                        </CustomCotainer>
                    </View>
                </ScrollView>
                <Line />
                <InfoButton
                    title="Cartão de Crédito"
                    onPress={() => {}}
                >
                    <View className="gap-1">
                        <OpacityText label="Fatura Atual" />
                        <PriceText label={1000} />
                        <OpacityText label="Limite Disponível: R$ 5.000,00" />
                    </View>
                </InfoButton>
            </ScrollView>
        </>
    )
}

export default Screen