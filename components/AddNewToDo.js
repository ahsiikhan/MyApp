import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const AddNewToDo = () => {
    const [toDo, settoDo] = useState('');

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput style={styles.input} value={toDo} onChangeText={settoDo} placeholder="Add your task" />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        backgroundColor: '#EDEEF0',
        borderRadius: 30,
        paddingHorizontal: 30,
        fontFamily: 'Poppins Regular',
        fontSize: 15,
        flex: 1,
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#FB716E',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    buttonText: {
        fontFamily: 'Poppins Medium',
        fontSize: 15,
        color: '#fff'
    }
})

export default AddNewToDo;