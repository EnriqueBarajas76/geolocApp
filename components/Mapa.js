import React from 'rect';
import {Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({longPress, puntos, verPuntos}) => {
    return (        
        <MapView
            style = {Styles.mapa}
            onLongPress={longPress}
        >
            {verPuntos && puntos.map( x =>
                <Marker
                    key = {x.name}
                    coordinate = {x.coordinate}
                    title = {x.name}
                />
            )}
        </MapView>
    )
}

const styles = StyleSheet.create ({
    mapa: {
        height: Dimensions.get('window').height-50,
        width: Dimensions.get('window').width,
    },
});