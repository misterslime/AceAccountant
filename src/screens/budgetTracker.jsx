import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BudgetTracker = ({navigation, route}) => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const monthlyExpensesCategories = [
        { name: 'Housing - Rent:', amount: 0 },
        { name: 'Groceries:', amount: 0 },
        { name: 'Bills:', amount: 0 },
        { name: 'Car Payment:', amount: 0 },
        { name: 'Insurance:', amount: 0 },
        { name: 'Entertainment:', amount: 0 },
        { name: 'Personal Expenses:', amount: 0 },
        { name: 'Company Expenses:', amount: 0 }
    ];

    const [monthlyExpenses, setMonthlyExpenses] = useState(monthlyExpensesCategories);

    const calculateBalance = () => {
        const totalExpenses = monthlyExpenses.reduce((acc, expense) => acc + expense.amount, 0);
        const totalBalance = income - totalExpenses;
        setExpenses(totalExpenses);
        setBalance(totalBalance);
    };

    const saveData = () => {
        // Implement save functionality (e.g., to local storage or a backend service)
        alert('Data saved!');
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#19173D',
            padding: 20,
        },
        section: {
            backgroundColor: '#F4F4F4',
            borderRadius: 10,
            padding: 10,
            marginBottom: 20,
        },
        subheader: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#000000',
        },
        category: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
        },
        button: {
            backgroundColor: '#31A099',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        input: {
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.subheader}>Monthly Statement</Text>
                <Text>Balance: {balance}</Text>
                <Text>Income: {income}</Text>
                <Text>Expenses: {expenses}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subheader}>Budget</Text>
                {monthlyExpenses.map((expenseCategory, index) => (
                    <View key={index} style={styles.category}>
                        <Text>{expenseCategory.name}</Text>
                        <TextInput
                            value={expenseCategory.amount.toString()}
                            onChangeText={(text) => {
                                let copy = [...monthlyExpenses];
                                copy[index].amount = parseFloat(text);
                                setMonthlyExpenses(copy);
                                calculateBalance();
                            }}
                            keyboardType='numeric'
                            style={{ width: '40%', textAlign: 'right' }}
                        />
                    </View>
                ))}
            </View>
            <Button title='Save Data' onPress={saveData} style={styles.button} />
        </View>
    );
};

export default BudgetTracker;
