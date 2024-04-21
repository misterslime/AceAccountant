/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SavingsGoals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Goals:</Text>
      
      {/* First Goal */}
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitle}>Goal: Ipad Pro</Text>
        <Text>Goal Amount (CAD): 1,099</Text>
        <Text>Monthly Deposit (CAD): 110</Text>
        <Text>Time to reach your goal (Months): 9 Months</Text>
        <TouchableOpacity style={styles.editGoalButton} onPress={() => navigation.navigate('EditGoal')}>
          <Text style={styles.buttonText}>Edit Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Space between containers */}
      <View style={styles.space}></View>

      {/* Second Goal */}
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitle}>Goal: Studio Lamp</Text>
        <Text>Goal Amount (CAD): 100</Text>
        <Text>Monthly Deposit (CAD): 25</Text>
        <Text>Time to reach your goal (Months): 4 Months</Text>
        <TouchableOpacity style={styles.editGoalButton} onPress={() => navigation.navigate('EditGoal')}>
          <Text style={styles.buttonText}>Edit Goal</Text>
        </TouchableOpacity>
      </View>

      {/* New Goal Button */}
      <TouchableOpacity style={styles.newGoalButton} onPress={() => navigation.navigate('NewGoal')}>
        <Text style={styles.buttonText}>New Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  primary: '#31A099',
  secondary: '#FFFFFF',
  tertiary: '#19173D',
  text: '#000000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalContainer: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  goalTitle: {
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editGoalButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  newGoalButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
  space: {
    height: 10,
  },
});

export { SavingsGoals };
