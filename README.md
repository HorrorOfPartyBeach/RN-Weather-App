<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">React Native Weather App</h1>

  <p align="center">
    A litte weather app built with React Native, TypeScript and OpenWeatherAPI.
    <br />
    <br />
    <a href="https://github.com/HorrorOfPartyBeach/RN-Weather-App/issues">Report Bug/Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I've been doing some React Native training and decided to build this little weather app based on Aman Mittal's tutorial.

I used one of the React Native project templates (could have chosen one that was more minimal in hindsight) and have updated or refactored some of the code from both the template and tutorial as I came across a couple of errors (e.g. `navigator.geolocation` seems to be deprecated so I used `expo-location` instead).

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React Native](https://reactnative.dev/docs/getting-started)
* [Expo](https://docs.expo.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [OpenWeatherAPI](https://openweathermap.org/api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Get a free API Key at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Clone the repo
   ```sh
   git clone https://github.com/HorrorOfPartyBeach/RN-Weather-App.git
   ```
3. Install Yarn packages
   ```sh
   yarn install
   ```
4. Enter your API in `utils/WeatherAPIKey.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Aman Mittal's Weather App Tutorial](https://blog.expo.dev/building-a-minimalist-weather-app-with-react-native-and-expo-fe7066e02c09)
    - I used this as the basis for my app

<p align="right">(<a href="#top">back to top</a>)</p>