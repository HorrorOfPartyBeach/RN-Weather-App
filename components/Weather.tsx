import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';

interface WeatherProps {
  locationName: string;
  temperature: number;
  weather: string;
};


export const Weather: React.FC<WeatherProps> = ({locationName, weather, temperature}) => {
  if(weather) {
    return (
      <View style={
        [styles.weatherContainer,
           { backgroundColor: weatherConditions[weather].color}
        ]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={72} name={weatherConditions[weather].icon} color={'#fff'} />
        <Text style={styles.title}>{locationName}</Text>
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weather}</Text>
        <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
      </View>
    </View>
  );
}
return null;
};

const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
      backgroundColor: '#f7b733'
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    tempText: {
      fontSize: 48,
      color: '#fff'
    },
    bodyContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      marginBottom: 40
    },
    title: {
      fontSize: 48,
      color: '#fff'
    },
    subtitle: {
      fontSize: 24,
      color: '#fff'
    }
  });