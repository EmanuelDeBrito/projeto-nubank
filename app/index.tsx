import { ScrollView } from "react-native"
import { Header } from "../components/header"
import { InfoButton } from "../components/info-button"
import { useState } from "react"
import { PriceText } from "../components/price-text"
import { OptionButton } from "../components/option-button"

const Screen = () => {
    const [balance, setBalance] = useState<number | string>(1200)
    const [balanceShown, setBalanceShown] = useState(true)

    const handleAccount = () => {

    }

    const handleTransformeBalance = () => {
    }

    return(
        <ScrollView className="h-screen">
            <Header
                balanceShown={balanceShown}
                setBalanceShown={setBalanceShown}
            />
            <InfoButton
                title="Conta"
                onPress={handleAccount}
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
        </ScrollView>
    )
}

export default Screen