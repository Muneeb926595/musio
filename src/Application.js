import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import {Navigations} from 'screens';

const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigations />;
};

export default Application;
