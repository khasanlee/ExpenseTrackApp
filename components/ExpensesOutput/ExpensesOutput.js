import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-07-24')
    },
    {
        id: 'e2',
        description: 'MacBook Pro',
        amount: 1199.99,
        date: new Date('2025-07-01')
    },
    {
        id: 'e3',
        description: 'Pants',
        amount: 7.99,
        date: new Date('2025-06-24')
    },
    {
        id: 'e4',
        description: 'Thumbler',
        amount: 4.99,
        date: new Date('2025-03-21')
    },
    {
        id: 'e5',
        description: 'Apple Watch',
        amount: 231.99,
        date: new Date('2025-03-02')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
})