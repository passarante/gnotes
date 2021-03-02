import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <View style={styles.todoItem} >
      <Text style={styles.todoItemText}>{title}</Text>
      <Ionicons name="checkbox-outline" size={24} color="grey" />
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    width: "100%",
    alignItems: 'center',
    marginTop: 20,
    justifyContent: "space-between"

  },
  todoItemText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
})
