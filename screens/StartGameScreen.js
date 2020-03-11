import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title='RESET' background={Colors.accentColor} color={Colors.accentColor} onPress={() => { }} />
                    </View>
                    <View style={styles.button} >
                        <Button title='CONFIRM' background={Colors.primary} color={Colors.primary} onPress={() => { }} />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        /*  NOTE: View's flex direction is set to 'column' by default.
            Meaning its main axis is top-to-bottom (y-axis);
            Center along cross section which is left-to-right*/
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
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
        borderRadius: 5
    }

});

export default StartGameScreen;