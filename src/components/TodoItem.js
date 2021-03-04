import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TodoItem = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const { id, title, completed } = todo;
  const colors = ['#f0932b', '#badc58', '#ff6b81', '#D980FA', '#12CBC4', '#7158e2'];
  let backColor = "";

  useEffect(() => {
    const rnd = Math.round(Math.random() * colors.length);
    backColor = colors[rnd]
  }, [])

  return (
    <TouchableOpacity style={[styles.todoItem]} onPress={() => handleUpdateTodo(id)} >
      <Text style={styles.todoItemText}>{title}</Text>
      <View style={styles.actionContainer}>
        <Ionicons style={styles.icon} name="checkbox-outline" size={24} color="grey" />
        <TouchableOpacity onPress={() => handleDeleteTodo(id)}>
          <Ionicons style={styles.icon} name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    width: "100%",
    alignItems: 'center',
    marginTop: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 5


  },
  todoItemText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  actionContainer: {
    flexDirection: "row"
  },
  icon: {
    marginLeft: 10
  }
})
