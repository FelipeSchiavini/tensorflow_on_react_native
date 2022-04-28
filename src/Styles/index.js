import React from 'react';
import { StyleSheet, View } from 'react-native';


export const Separator = () => (
    <View style={styles.separator} />
);
    

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8AAA79'
    },
    separator: {
        marginVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    prediction: {
        color: 'red',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10
    },
    });
      