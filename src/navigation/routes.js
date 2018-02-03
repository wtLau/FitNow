import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Workout from '../scene/Workout/';
import Logs from '../scene/Logs/';
// import Workout from '../scene/Workout/';
// import Workout from '../scene/Workout/';

const WorkoutScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Workout Screen</Text>
        <Button
            onPress={() => navigation.navigate('Program')}
            title="Go to Programs"
        />
    </View>
);

const ProgramScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Programs Screen</Text>
    </View>
);
const LogsScreen = ({ navigation }) => (
    <Logs navigation={navigation} />
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootNavigator = TabNavigator({
    Workout: {
        screen: Workout,
        navigationOptions: {
            headerTitle: 'Workout',
        },
    },
    Program: {
        screen: ProgramScreen,
        navigationOptions: {
            headerTitle: 'Programs',
        },
    },
    Logs: {
        screen: LogsScreen,
        navigationOptions: {
            headerTitle: 'Logs',
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: 'Profile',
        },
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            // activeBackgroundColor: colors.grey,
            // inactiveBackgroundColor: colors.lightGreen,
            inactiveTintColor: 'white',
            activeTintColor: 'white'
        }
    });

export default RootNavigator;