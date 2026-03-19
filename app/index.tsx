import { ScrollView } from "react-native"
import { Header } from "../components/header"
import { InfoButton } from "../components/info-button"
import { useState } from "react"
import { PriceText } from "../components/price-text"

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
        </ScrollView>
    )
}

export default Screen