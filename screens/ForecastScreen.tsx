import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export const ForecastScreen = ({ route }) => {
    const { location, temperature, weather } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forecast for {location}</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.bodyText}>
                The current temperature is {temperature}
            </Text>
            <Text style={styles.bodyText}>
                The current weather is {weather}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    bodyText: {
        fontSize: 20,
        fontWeight: 'normal'
    }
});
