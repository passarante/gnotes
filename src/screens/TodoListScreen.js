import React, { useEffect, useState } from 'react'
import { SafeAreaView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import TodoItem from '../components/TodoItem';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {


  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState();

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: "Dişlerini Fırçala",
    //   completed: false
    // },
    // {
    //   id: 2,
    //   title: "Çiçeğe su ver",
    //   completed: false
    // },
    // {
    //   id: 3,
    //   title: "Elini zımbala",
    //   completed: false
    // },
    // {
    //   id: 4,
    //   title: "Pederi kızdır",
    //   completed: false
    // },

  ]);

  const getStorage = async () => {
    const storageTodos = await AsyncStorage.getItem('@todos')

    setTodos(JSON.parse(storageTodos));
  }

  const setStorage = async (tempTodos) => {
    try {
      await AsyncStorage.setItem('@todos', JSON.stringify(tempTodos))
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getStorage()

  }, [])

  useEffect(() => {
    setStorage(todos)
  }, [todos])


  const handleAddTodo = async () => {
    const newTodo = {
      id: Date.now(),
      title: todoText,
      completed: false
    };

    const tempTodos = [
      ...todos,
      newTodo
    ]
    setTodos(tempTodos);


    setTodoText("");

  }

  const handleDeleteTodo = async (id) => {
    const tempTodos = todos.filter(todo => todo.id !== id);
    setTodos(tempTodos);
    setTodoText("");
    setSelectedTodoId(null);
    setEditMode(false);


  }

  const handleUpdateTodo = (id) => {
    const tempTodo = todos.filter(todo => todo.id === id)[0];
    setTodoText(tempTodo.title);
    setSelectedTodoId(id);
    setEditMode(true);

  }

  const handleChangeTodo = async () => {

    const tempTodos = todos.map(todo => {
      if (todo.id === selectedTodoId) {
        todo.title = todoText
        return todo;
      }
      return todo;
    });

    setTodos(tempTodos);
    setTodoText("")
    setEditMode(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Gny</Text>
          <Text style={styles.logoText1}>Notes</Text>
        </View>

        <View style={styles.todoContainer}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) =>
              <TodoItem todo={item}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo} />} />

        </View>
        <View style={styles.todoInputContainer}>
          <TextInput value={todoText} onChangeText={setTodoText} style={styles.todoInput} placeholder="Ne yapmak istiyorsunuz?" />

          {
            !editMode ? (<TouchableOpacity onPress={handleAddTodo}>
              <Ionicons name="md-add" size={30} color="black" />
            </TouchableOpacity>) : (
              <TouchableOpacity onPress={handleChangeTodo}>
                <Feather name="edit" size={30} color="green" />
              </TouchableOpacity>
            )
          }


        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default TodoListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 40 : 0,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#D4DCFF"
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  logoText: {
    fontSize: 50,
    fontFamily: "Poppins_500Medium",
    color: "#e74c3c"
  },
  logoText1: {
    fontSize: 30,
    fontFamily: "Poppins_500Medium",
    color: "white"
  },

  todoInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    padding: 10,
    bottom: 30,
    left: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  }


})
