import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

const Workout = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Workout Screen hello</Text>
        <Button
            onPress={() => navigation.navigate('Program')}
            title="Go to Programs"
        />
    </View>
)

Workout.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
}

const WorkoutWithNavigation = withNavigation(Workout);
export default WorkoutWithNavigation;
// export default Workout;