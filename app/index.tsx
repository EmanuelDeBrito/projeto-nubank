import { ScrollView } from "react-native"
import { Header } from "../components/header"

const Screen = () => {
    return(
        <ScrollView className="h-screen">
            <Header />
        </ScrollView>
    )
}

export default Screen