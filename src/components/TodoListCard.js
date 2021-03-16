import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TodoListCard = ({ list }) => {
  return (
    <View style={[styles.card, { backgroundColor: list.color }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{list.name}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyItemContainer}>
          <Text style={styles.numberText}>3</Text>
          <Text style={styles.detailText}>Tamamlanmamış</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cardBodyItemContainer}>
          <Text style={styles.numberText}>3</Text>
          <Text style={styles.detailText}>Tamamlanan</Text>
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
    flex: 1,
    marginBottom: 20,
  },
  cardHeaderText: {
    fontSize: 30, color: "white", fontWeight: "bold"
  },
  cardBodyItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
  },
  numberText: {
    color: "white",
    fontSize: 50,

  },
  detailText: {
    color: "white",
    fontSize: 18

  },



})