/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { CompositeScreenProps, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps, NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Forecast: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// export type HomeParamList = {
//   Forecast: undefined;
// }

// export type HomeScreenProps = NativeStackScreenProps<
// HomeParamList,
// 'Forecast'
// >;