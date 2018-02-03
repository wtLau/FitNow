import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

const Logs = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logs Screen</Text>
        <Text>This is all the workout logs you have archeived</Text>
        <Button
            onPress={() => navigation.navigate('Workout')}
            title="Go to Workout"
        />
    </View>
)

Logs.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
}

const LogsWithNavigation = withNavigation(Logs);
export default LogsWithNavigation;
// export default Logs;