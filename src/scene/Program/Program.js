import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

const Program = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Program Screen</Text>
        <Text>This is all the workout Program you have archeived</Text>
        <Button
            onPress={() => navigation.navigate('Workout')}
            title="Go to Workout"
        />
    </View>
)

Program.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
}

const ProgramWithNavigation = withNavigation(Program);
export default ProgramWithNavigation;