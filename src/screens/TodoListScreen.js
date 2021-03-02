import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import TodoItem from '../components/TodoItem';

const TodoListScreen = () => {

  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Dişlerini Fırçala",
      completed: false
    },
    {
      id: 2,
      title: "Çiçeğe su ver",
      completed: false
    },
    {
      id: 3,
      title: "Elini zımbala",
      completed: false
    },
    {
      id: 4,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 5,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 6,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 7,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 8,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 9,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 10,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 11,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 12,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 13,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 14,
      title: "Pederi kızdır",
      completed: false
    },
    {
      id: 15,
      title: "Pederi kızdır",
      completed: false
    },
  ]);

  const handleAddTodo = () => {
    alert("Hacı sen hayırdır..." + todoText)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Gny</Text>
        <Text style={styles.logoText1}>Notes</Text>
      </View>

      <View style={styles.todoContainer}>
        <ScrollView>

          {
            todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </ScrollView>


      </View>
      <View style={styles.todoInputContainer}>
        <TextInput value={todoText} onChangeText={setTodoText} style={styles.todoInput} placeholder="Ne yapmak istiyorsunuz?" />
        <TouchableOpacity onPress={handleAddTodo}>
          <Ionicons name="md-add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
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
    color: "#C4E538"
  },

  todoInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    padding: 10,
    bottom: 30,
    left: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  }


})
