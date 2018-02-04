import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import Program from './Program';
// import CustomHeader from '../../components/Header/';

class ProgramContainer extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: (
    //             <CustomHeader
    //                 title={'Learn'}
    //                 buttons={['Program', 'Ingredients', 'Growers']}
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
            <Program />
        )
    }
}

// ProgramContainer.propTypes = {}

// const fetchEvents = gql``

// const eventsList = graphql(fetchEvents)(EventsContainer);
export default ProgramContainer;