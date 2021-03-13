import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TodoListCard = ({ list }) => {
  return (
    <View style={[styles.card, { backgroundColor: list.color }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{list.name}</Text>
      </View>
      <View style={styles.cardBody}>
        <View>
          <Text>
            <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 40, color: "black" }}>10</Text>
            </View>
            <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 40 }} >/</Text >
            </View>
            <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 40, color: list.color }}>32</Text>
            </View>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default TodoListCard
const styles = StyleSheet.create({

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