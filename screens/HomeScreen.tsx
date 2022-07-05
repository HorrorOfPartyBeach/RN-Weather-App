import React, {useState, useEffect} from 'react';
import { Platform, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../components/Themed';
import { Home } from '../components/Home';

import * as Location from 'expo-location';

import { API_KEY } from '../utils/WeatherAPIKey';

export const HomeScreen = ({navigation}) => {

  const [locationName, setLocationName] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  const getLocation = async () => {
    let {
        status
    } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    try {
    let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest
    })

    let { coords } = location;

    if (coords) {
      const { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);
   }
  } catch(error) {
    console.log("Error while trying to get location:", error);
  }
};

  const getWeatherData = async (lat: number, long: number) => {
    let API = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`
    try {
    await fetch(API)
      .then(res => res.json())
      .then(data => {
        setLocationName(data.name);
        setTemperature(data.main.temp);
        setWeatherCondition(data.weather[0].main);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
        getLocation()
            .then(() => {
                if (latitude !== undefined && longitude !== undefined) {
                  getWeatherData(latitude, longitude);
                }
            })
            

    } catch (error) {
        console.error(error);
    }

}, [latitude, longitude]);

  return (
      <Home navigation={navigation} location={locationName} weather={weatherCondition} temperature={temperature} />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
