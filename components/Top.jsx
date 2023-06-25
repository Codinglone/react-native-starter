import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"

const Top = () => {
    return (
        <View>
            <Text style={styles.componentTexts}>Hello</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    componentTexts: {
        fontWeight: 'bold',
        color: 'red',
    }
})

export default Top;