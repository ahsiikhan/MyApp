import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Checkbox from "./CheckBox";

const ToDoList = (props) => {

    const handleCheckboxChange = (id) => {
        const updatedTodos = props.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            } else {
                return todo;
            }
        });
        props.setTodos(updatedTodos);
    }

    return (
        <View>
            <View style={styles.listContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={props.todos}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable style={styles.toDoItem} key={item.id}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Checkbox isChecked={item.isCompleted} onChange={() => handleCheckboxChange(item.id)} />
                                <Text style={[styles.itemTitle, { textDecorationLine: item.isCompleted ? 'line-through' : 'none' }]}>{item.title}</Text>
                            </View>
                            <Pressable onPress={() => {
                                props.deleteTodo(item.id);
                            }}>
                                <Image style={styles.icon} source={require('../assets/delete_icon.png')} />
                            </Pressable>
                        </Pressable>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },
    toDoItem: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#C6EAFC',
        marginBottom: 20,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontFamily: 'Poppins Regular',
        fontSize: 15,
        flex: 1,
        marginRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#FB716E'
    },
})

export default ToDoList;