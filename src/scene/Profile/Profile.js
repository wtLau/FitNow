import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

const Profile = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>This the user Profile</Text>
        <Button
            onPress={() => navigation.navigate('Logs')}
            title="Go to Logs"
        />
    </View>
)

Profile.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
}

const ProfileWithNavigation = withNavigation(Profile);
export default ProfileWithNavigation;
// export default Profile;