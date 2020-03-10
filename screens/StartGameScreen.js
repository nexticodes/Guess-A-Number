import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>THE GAME SCREEN!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        // NOTE: View's flex direction is set to 'column' by default.
        // Meaning its main axis is top-to-bottom (y-axis);
        // Center along cross section which is left-to-right
        alignItems: 'center',
        // Center along main axis which is top-to-bottom
        // justifyContent: 'center'
    }
});

export default StartGameScreen;