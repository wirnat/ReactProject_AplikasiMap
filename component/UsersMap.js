import React from 'react'
import {View,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


const usersMap=props=>{
    let userLocationMarker=null;

    if (props.userLocation) {
        userLocationMarker=<MapView.Marker coordinate={props.userLocation}/>;
    }
    return(
        <View style={styles.mapContainer}>
            <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            region={props.userLocation}
            style={styles.mapStyle}>
                {userLocationMarker}
            </MapView>
        </View>
    )
}

const styles=StyleSheet.create({
    mapContainer:{
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10,
    },
    mapStyle: {
        width: "100%",
        height: "100%",
    },
})

export default usersMap