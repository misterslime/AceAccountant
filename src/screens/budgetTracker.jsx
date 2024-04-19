import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
 
const BudgetTracker = () => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    
    const monthlyExpensesCategories = [
        { name: 'Bills', amount: 0 },
        { name: 'Car Payment', amount: 0 },
        { name: 'Internet', amount: 0 },
        { name: 'Insurance', amount: 0 },
        { name: 'Rent', amount: 0 },
        { name: 'Entertainment', amount: 0 },
        { name: 'Personal Expenses', amount: 0 }
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
 
    return (
        <View>
            <Text>Balance:</Text>
            <TextInput
                value={balance.toString()}
                onChangeText={(text) => setBalance(parseFloat(text))}
                keyboardType='numeric'
                editable={false}
            />
        
            <Text>Income:</Text>
            <TextInput
                value={income.toString()}
                onChangeText={(text) => setIncome(parseFloat(text))}
                keyboardType='numeric'
            />
        
            <Text>Total Expenses:</Text>
            <Text>{expenses}</Text>
        
            {monthlyExpenses.map((expenseCategory, index) => (
            <View key={index}>
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
                />
            </View>
            ))}
        
            <Button title='Save Data' onPress={saveData} />
        </View>
    );
};
 
export default BudgetTracker;