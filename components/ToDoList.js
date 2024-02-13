import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Checkbox from "./CheckBox";

const ToDoList = (props) => {

    const handleCheckboxChange = (id) => {
        const updatedTodos = props.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isChecked: !todo.isChecked };
            } else {
                return todo;
            }
        });
        props.setTodos(updatedTodos);
    }

    return (
        <View>
            <View style={styles.listContainer}>
                {
                    props.todos.map((item) => (
                        <Pressable style={styles.toDoItem} key={item.id}>
                            <Checkbox isChecked={item.isChecked} onChange={() => handleCheckboxChange(item.id)} />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },
    heading: {
        fontFamily: 'Poppins Medium',
        fontSize: 19,
    },
    toDoItem: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#C6EAFC',
        marginVertical: 10,
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
    },
    itemTitle: {
        fontFamily: 'Poppins Regular',
        fontSize: 15,
    }
})

export default ToDoList;