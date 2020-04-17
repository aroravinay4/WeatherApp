import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = props => {

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>{props.temp}</Text>
            <Text style={styles.textStyle}>{props.humidity}</Text>
            <Text style={styles.textStyle}>{props.wind}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18,
        color: 'white'

    }
});

export default ListItem;