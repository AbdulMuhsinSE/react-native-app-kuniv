import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function getLocationAsync(onSend, user) {
    Geolocation.getCurrentPosition(
        position => {
            const location = position.coords;
            if(location) {
                onSend([{text: `http://maps.google.com/?q=${location.latitude},${location.longitude}`, user: user, location: JSON.stringify(position.coords.longitude) + ',' + JSON.stringify(position.coords.latitude)}]);
            }
        }
    )
}

export default class CustomActions extends React.Component {
    onActionsPress = () => {
        const {onSend, user} = this.props;
        getLocationAsync(onSend, user);
    }

    renderIcon = () => {
        if(this.props.renderIcon) {
            return this.props.renderIcon()
        }

        return (
            <View style={[styles.wrapper, this.props.wrapperStyle]}>
                <Text style={[styles.iconText, this.props.iconTextStyle]}> + </Text>
            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
            >
                {this.renderIcon()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
})


CustomActions.defaultProps = {
    onSend: () => {},
    options: {},
    renderIcon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
}
