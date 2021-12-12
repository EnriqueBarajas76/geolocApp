import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

export default ({ puntos }) => {
    return (
        <FlatList
            data = { puntos.map(n => n.name)}
            renderItem ={({item}) => <Text> {item} </Text> }
            keyExtractor={item => item}
        />
    )
}

const styles = StyleSheet.create({
    lista: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})