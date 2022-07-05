import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';
import { Text } from '../components/Themed';

export const Home = ({ navigation, location, weather, temperature }) => {
    if (weather) {
        return (
            <View
                style={[
                    styles.container,
                    { backgroundColor: weatherConditions[weather].color }
                ]}
            >
                <View style={styles.headerContainer}>
                    <MaterialCommunityIcons
                        size={72}
                        name={weatherConditions[weather].icon}
                        color={'#fff'}
                    />
                    <Pressable
                        onPress={() =>
                            navigation.navigate('Forecast', {
                                location,
                                weather,
                                temperature
                            })
                        }
                    >
                        <Text style={styles.largeText}>{location}</Text>
                    </Pressable>
                    <Text style={styles.largeText}>{temperature}˚</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.largeText}>
                        {weatherConditions[weather].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherConditions[weather].subtitle}
                    </Text>
                </View>
            </View>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    largeText: {
        fontSize: 48,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        paddingBottom: 40
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});
