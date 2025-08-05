import { Platform, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date : new Date(),
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function dateChangeHandler(event, selectedDate) {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      inputChangedHandler("date", selectedDate);
    }
  }

  function showDatePickerHandler() {
    setShowDatePicker(true);
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: inputs.date.value,
      description: inputs.description.value.trim(),
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      expenseData.date instanceof Date && !isNaN(expenseData.date);
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //Alert.alert("Invalid input", "Please check your input values.");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <View style={[styles.rowInput, styles.dateInputContainer]}>
          <Text
            style={[
              styles.dateLabel,
              !inputs.date.isValid && styles.invalidLabel,
            ]}
          >
            Date
          </Text>
          <Button
            mode={"flat"}
            onPress={showDatePickerHandler}
            style={[
              styles.dateButton,
              !inputs.date.isValid && styles.invalidButton,
            ]}
          >
            {inputs.date.value instanceof Date
              ? getFormattedDate(inputs.date.value)
              : "Select Date"}
          </Button>
        </View>
      </View>

      {showDatePicker && (
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            value={
              inputs.date.value instanceof Date ? inputs.date.value : new Date()
            }
            mode="date"
            display={'spinner'}
            onChange={dateChangeHandler}
            maximumDate={new Date()}
            textColor="white"
          />
          <View style={styles.iosDatePickerButtonsContainer}>
            <Button mode="flat" onPress={() => setShowDatePicker(false)}>
              Cancel
            </Button>
            <Button onPress={() => setShowDatePicker(false)}>Confirm</Button>
          </View>
        </View>
      )}
      <Input
        invalid={!inputs.description.isValid}
        label={"Description"}
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, // default is true
          // autoCapitalize: "none", // default is 'sentences'
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - Please check your entered data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  dateInputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  dateLabel: {
    fontSize: 13,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  dateButton: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    paddingVertical: 2,
    color: GlobalStyles.colors.primary700,

  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidButton: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  iosDatePickerButtonsContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  datePickerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
  },

  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
