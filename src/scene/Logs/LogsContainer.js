import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import Logs from './Logs';
// import CustomHeader from '../../components/Header/';

class LogsContainer extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: (
    //             <CustomHeader
    //                 title={'Learn'}
    //                 buttons={['Logs', 'Ingredients', 'Growers']}
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
            <Logs />
        )
    }
}

// LogsContainer.propTypes = {}

// const fetchEvents = gql``

// const eventsList = graphql(fetchEvents)(EventsContainer);
export default LogsContainer;