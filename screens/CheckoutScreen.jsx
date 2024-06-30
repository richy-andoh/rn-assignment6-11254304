import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import Logo from "../assets/Logo.png";
import Ionicons from "react-native-vector-icons/Ionicons"

const CheckoutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20, }}>
                <View>

                </View>
                <View>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={Logo} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginRight: 16}}>
                    <Ionicons name="search-outline" size={35} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default CheckoutScreen;