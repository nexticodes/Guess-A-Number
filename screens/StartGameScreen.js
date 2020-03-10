import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title='RESET' onPress={() => {}}/>
                    <Button title='CONFIRM' onPress={() => {}}/>
                </View>
            </View>
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
    },
    title: {
        fontSize: 20,
        // replaces marginBottom and marginTop
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }

});

export default StartGameScreen;