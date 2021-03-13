import React, { useEffect, useState } from 'react'
import {
  SafeAreaView, Platform, StyleSheet, Text,
  TextInput, TouchableOpacity, View, KeyboardAvoidingView, FlatList
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { getStorage, setStorage } from '../helpers';
import TodoListCard from '../components/TodoListCard';

const TodoListScreen = () => {

  const rnd = Math.floor(Math.random() * 3);
  const colors = ['pink', 'pink', 'pink', 'pink'];


  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState();

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "name": "Okul",
      "color": "#badc58",
      "tasks": [
        {
          "title": "Hocayı döv",
          "completed": true
        },
        {
          "title": "Kütüphaneciye söv",
          "completed": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Ev",
      "color": "#eb4d4b",
      "tasks": [
        {
          "title": "sadsadsad ",
          "completed": true
        },
        {
          "title": "asdsadsad asdsadsa",
          "completed": true
        }
      ]
    },
    {
      "id": 3,
      "name": "Tatil",
      "color": "#ffbe76",
      "tasks": [
        {
          "title": "sadsadsad ",
          "completed": true
        },
        {
          "title": "asdsadsad asdsadsa",
          "completed": true
        }
      ]
    },
  ]);





  useEffect(() => {
    // getStorage('@todos').then(res => {
    //   console.log("RES", res);
    //   setTodos(JSON.parse(res));
    // }).catch(err => console.log(err))

  }, [])



  useEffect(() => {
    // setStorage("@todos", todos)
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
    <SafeAreaView style={[styles.container, { backgroundColor: colors[rnd] }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { backgroundColor: colors[rnd] }]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Gny</Text>
          <Text style={styles.logoText1}>Notes</Text>
        </View>

        <View style={styles.todoContainer}>
          <FlatList data={todos} horizontal showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({ item, index }) =>
              <View style={{ margin: 10 }}><TodoListCard list={item} /></View>} />

        </View>
        {/* <View style={styles.todoInputContainer}>
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

        </View> */}
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
    padding: 10,
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
  todoContainer: {
    padding: 10,
    height: 400
  },

  // todoInputContainer: {
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   position: "absolute",
  //   padding: 10,
  //   bottom: 30,
  //   left: 20,
  //   borderBottomColor: "grey",
  //   borderBottomWidth: 2,
  // },
  card: {
    height: 300,
    width: 250,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 15,
    padding: 10,
    alignItems: "center"
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardHeaderText: {
    fontSize: 30, color: "black", fontWeight: "bold"
  },
  cardBody: {
    backgroundColor: "white",
    width: 230,
    height: 200,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },


})
