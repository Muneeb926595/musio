import styled from 'styled-components';
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, Easing, TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {} from 'screens';
import {Fooder as FooderIcon, Plus as PlusIcon} from 'assets/icons';
import {Col, Row} from 'components';
import {AdditionalMenu, TabBarItem} from './components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AdditionalRow = styled(Row)`
  position: absolute;
  z-index: 2;
  bottom: ${wp(11)}px;
  right: ${wp(4)}px;
`;

const index = () => {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState('Fooder');
  const minimizeOptions = useSelector(
    ({animations}) => animations.minimizeOptions,
  );

  const rotateCircle = new Animated.Value(0);
  const moveCircle = new Animated.Value(0);

  const rotateData = rotateCircle.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '270deg'],
  });

  const moveData = moveCircle.interpolate({
    inputRange: [0, 1],
    outputRange: [-250, -125],
  });

  const additionalMenuAnimation = (menu) => {
    Animated.parallel([
      Animated.timing(rotateCircle, {
        toValue: menu ? 1 : 0,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(moveCircle, {
        toValue: menu ? 1 : 0,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const AdditionalNav = ({}) => {
    const showMenu = useSelector(({animations}) => animations.showMenu);
    const minimizeOptions = useSelector(
      ({animations}) => animations.minimizeOptions,
    );

    useEffect(() => {
      additionalMenuAnimation(showMenu);
    }, [showMenu]);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch({
            type: 'CHANGE_MENU',
            payload: !showMenu,
          });
          if (!showMenu) {
            dispatch({
              type: 'BUTTON_PRESS',
              payload: !minimizeOptions,
            });
          } else {
            setTimeout(() => {
              dispatch({
                type: 'BUTTON_PRESS',
                payload: !minimizeOptions,
              });
            }, 700);
          }
        }}>
        <AdditionalRow>
          <PlusIcon />
        </AdditionalRow>
      </TouchableWithoutFeedback>
    );
  };

  const TabNav = ({navigation}) => {
    return (
      <React.Fragment>
        <Tab.Navigator
          lazy={true}
          tabBarOptions={{
            style: {
              height: wp(20),
              borderTopColor: 'transparent',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              paddingRight: wp(20),
              paddingLeft: wp(3),
            },
            keyboardHidesTabBar: true,
          }}>
          <Tab.Screen
            name="Fooder"
            component={() => (
              <View>
                <Text>Hi there Home Page</Text>
              </View>
            )}
            options={{
              tabBarButton: (props) => (
                <TabBarItem
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  minimizeOptions={minimizeOptions}
                  Icon={FooderIcon}
                  text="Fooders"
                  focused={props.focused}
                  tabNumber={1}
                  navigation={navigation}
                  navigateTo="Fooder"
                  {...props}
                />
              ),
              tabBarLabel: (props) => null,
            }}
          />
        </Tab.Navigator>
      </React.Fragment>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNav">
          {(props) => (
            <Col relative>
              <AdditionalNav {...props} />
              <AdditionalMenu
                {...props}
                activeMenu={activeMenu}
                rotateData={rotateData}
                moveData={moveData}
              />
              <TabNav {...props} />
            </Col>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
