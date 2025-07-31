import axios from "axios";

export function storeExpense(expenseData) {
    axios.post('https://expense-tracker-app-14b30-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    )
}