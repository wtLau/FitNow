import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import Profile from './Profile';
// import CustomHeader from '../../components/Header/';

class ProfileContainer extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: (
    //             <CustomHeader
    //                 title={'Learn'}
    //                 buttons={['Profile', 'Ingredients', 'Growers']}
    //                 selectedTab={0}
    //                 navigation={navigation}
    //             />
    //         )
    //     }
    // };

    render() {
        // const { data: { loading } } = this.props;

        // if (loading) return <ActivityIndicator />;
        return (
            <Profile />
        )
    }
}

// ProfileContainer.propTypes = {}

// const fetchEvents = gql``

// const eventsList = graphql(fetchEvents)(EventsContainer);
export default ProfileContainer;