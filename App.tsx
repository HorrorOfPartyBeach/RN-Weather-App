import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
//import Navigation from './navigation';
import * as Location from 'expo-location';

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather';

export default function App() {
  const isLoadingComplete = useCachedResources();
  //const colorScheme = useColorScheme();

  const [locationName, setLocationName] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  //const [error, setError] = useState("");
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
    // console.log("COORDS:", coords);

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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Weather locationName={locationName} weather={weatherCondition} temperature={temperature} />
        {/* <Navigation colorScheme={colorScheme} /> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
