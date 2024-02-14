import React, { useState, useEffect } from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from "./components/Header";
import AddNewToDo from './components/AddNewToDo';
import ToDoList from "./components/ToDoList";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from "./components/Search";


const App = () => {

  const STORAGE_KEY = '@todos';

  const [todos, setTodos] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Error loading todos: ', error);
    }
  }

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos: ', error);
    }
  }

  const addTodo = (title) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        title: title,
        isCompleted: false
      }
    ]);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const deleteTodos = (ids) => {
    const updatedTodos = todos.filter(todo => !ids.includes(todo.id));
    setTodos(updatedTodos);
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden={true} />
      <Header searchMode={searchMode} setSearchMode={setSearchMode} />
      <View style={styles.container}>
        <AddNewToDo addTodo={addTodo} />
        {searchMode &&
          <Search searchText={searchText} setSearchText={setSearchText} />
        }
        <View style={{ marginTop: 30, marginBottom: searchMode ? 170 : 80 }}>
          <ToDoList todos={
            todos.filter((todo) => {
              for (let key in todo) {
                if (key === 'title') {
                  if (todo[key].toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                  }
                }
              }
              return false;
            })
          } setTodos={setTodos} deleteTodo={deleteTodo} deleteTodos={deleteTodos} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
})

export default App;