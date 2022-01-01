import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikUpload from './FormikUpload'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        <FormikUpload />
    </View>
)

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image source={{
                    uri:'https://img.icons8.com/fluency-systems-filled/344/back.png'}} 
                style={{ width: 30, height:30}}/>
            </TouchableOpacity>
            <Text style={styles.headerText}> NEW POST</Text>
            <Text></Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
        
    },

    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color:'#000',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,

    }
})

export default AddNewPost
 