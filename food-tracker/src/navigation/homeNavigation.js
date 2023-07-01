import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCloud } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faHome, faCloud);

import Home from '../screens/home'
import Receipts from '../screens/receipts';

const Tab = createBottomTabNavigator();

const TabArr = [
    { 
        name: 'Home',
        icon: 'fa-home',
        component: Home 
    },
    { 
        name: 'Receipts', 
        icon: 'fa-cloud',
        component: Receipts 
    }
  ];

const screenHeight = Dimensions.get('window').height;

export default function HomeNavigation() {
  return (
    <Tab.Navigator 
        screenOptions={{ 
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopWidth: 1,
                borderTopColor: 'gray',
                height: screenHeight * 0.1
            }
    }}>
        {TabArr.map((screen, index) => {
            return (
                <Tab.Screen 
                    key={index} 
                    name={screen.name}
                    options={{
                        tabBarIcon: ({focused, color, size}) => {
                            const styles = StyleSheet.create({
                                screen: {
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: screenHeight * 0.012
                                },
                                screenIconImage: {
                                    width: 25,
                                    height: 25,
                                    color: focused ? '#e32f45' : '#748c94'
                                },
                                screenIconText: {
                                    color: focused ? '#e32f45' : '#748c94', fontSize: 12
                                }
                            })
                            return (
                                <View style={styles.screen}>
                                    <FontAwesomeIcon icon={screen.icon} style={styles.screenIconImage} />
                                    <Text style={styles.screenIconText} >{screen.name}</Text>
                                </View>
                            )
                        }
                    }}
                    component={screen.component}  
                />
            )
        })}
    </Tab.Navigator>
  );
}



