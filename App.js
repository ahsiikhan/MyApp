import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import AddNewToDo from './components/AddNewToDo';
import ToDoList from "./components/ToDoList";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete homework",
      isChecked: false,
      isCompleted: false
    },
    {
      id: 2,
      title: "Buy groceries",
      isChecked: false,
      isCompleted: false
    },
    {
      id: 3,
      title: "Call friend",
      isChecked: false,
      isCompleted: false
    },
    {
      id: 4,
      title: "Go for a run",
      isChecked: false,
      isCompleted: false
    },
    {
      id: 5,
      title: "Read a book",
      isChecked: false,
      isCompleted: false
    }
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden={true} />
      <Header title="To Do List" />
      <View style={styles.container}>
        <AddNewToDo />
        <View style={{ marginVertical: 20, }}>
          <ToDoList todos={todos} setTodos={setTodos} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  }
})

export default App;