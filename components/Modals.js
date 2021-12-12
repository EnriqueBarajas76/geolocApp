import React from 'react';
import { Modal, StyleSheet, Text, View} from 'react-native';

export default ({children, ver}) => {
    return(
        <Modal
            animationType= 'slide'
            transparent = {true}
            visible = {ver}
        >
            <View style={styles.centrar} >
                <View style={styles.modalv} >
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    centrar :{
        flex: 1,
        alignitems: 'center',
        justifyconten: 'center',
    },
    modalv: {
        backgrouncolor: '#fff',
        borderRadius: 5,
        padding: 20,
        shadowColor: '#ccc',
        sahdowOffset: {
           width:3,  
        } 
    }
