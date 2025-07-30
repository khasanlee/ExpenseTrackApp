import {  createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-07-28')
    },
    {
        id: 'e2',
        description: 'MacBook Pro',
        amount: 1199.99,
        date: new Date('2025-07-27')
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
        date: new Date('2025-01-02')
    },
    {
        id: 'e6',
        description: 'MacBook Pro',
        amount: 1199.99,
        date: new Date('2025-07-01')
    },
    {
        id: 'e7',
        description: 'Pants',
        amount: 7.99,
        date: new Date('2025-06-24')
    },
    {
        id: 'e8',
        description: 'Thumbler',
        amount: 4.99,
        date: new Date('2025-03-21')
    },
    {
        id: 'e9',
        description: 'Apple Watch',
        amount: 231.99,
        date: new Date('2025-03-02')
    },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
        const id = new Date().toISOString() + Math.random().toString();
        return[{...action.payload, id: id}, ...state ]
    case "UPDATE":
        const updatableExpenseIndex = state.findIndex(
          (expense) => expense.id === action.payload.id
        );
        const updatableExpense = state[updatableExpenseIndex];
        const updatedItem = { ...updatableExpense, ...action.payload.data };
        const updatedExpenses = [...state];
        updatedExpenses[updatableExpenseIndex] = updatedItem;
        return updatedExpenses
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
