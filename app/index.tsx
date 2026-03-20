import { ScrollView } from "react-native"
import { Header } from "../components/header"
import { InfoButton } from "../components/info-button"
import { PriceText } from "../components/price-text"
import { OptionButton } from "../components/option-button"
import { CustomCotainer } from "../components/custom-container"
import { useState } from "react"
import { InfoItem } from "../components/info-item"
const Screen = () => {
    const [balance, setBalance] = useState<number | string>(1200)
    const [balanceShown, setBalanceShown] = useState(true)

    return(
        <ScrollView className="h-screen">
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
        </ScrollView>
    )
}

export default Screen