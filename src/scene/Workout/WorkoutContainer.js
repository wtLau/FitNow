import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import Workout from './Workout';
// import CustomHeader from '../../components/Header/';

class WorkoutContainer extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: (
    //             <CustomHeader
    //                 title={'Learn'}
    //                 buttons={['workout', 'Ingredients', 'Growers']}
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
            <Workout />
        )
    }
}

// workoutContainer.propTypes = {}

// const fetchEvents = gql``

// const eventsList = graphql(fetchEvents)(EventsContainer);
export default WorkoutContainer;