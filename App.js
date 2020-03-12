import React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppContainer from './src/routes';

export default function App() {
  const [assetsLoaded, setLoadingState] = React.useState(false);
  React.useEffect(() => {
    Font.loadAsync({
      primary: require('./assets/fonts/inter.ttf'),
      secondary: require('./assets/fonts/ArchivoBlack.ttf'),
    }).then(() => setLoadingState(true));
  });
  return assetsLoaded ? <AppContainer /> : <AppLoading />;
}
