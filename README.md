# 💰 Expense Tracker App

> A modern mobile expense tracking application built with React Native and Firebase

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📱 Overview

**Expense Tracker** is a user-friendly mobile application designed to help you manage and monitor your daily expenses effortlessly. Built with React Native and powered by Firebase, this app provides a seamless experience for tracking your financial activities on both iOS and Android devices.

### ✨ Key Features

- 📊 **Real-time Expense Tracking** - Add, edit, and delete expenses instantly
- 📅 **Recent & All Expenses View** - Toggle between last 7 days and complete expense history
- 💾 **Cloud Storage** - All data securely stored and synced with Firebase
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth navigation
- 📱 **Cross-Platform** - Works seamlessly on both iOS and Android
- 🔄 **Offline Support** - Local state management with cloud synchronization
- 📈 **Expense Summary** - Real-time calculation of total expenses

## 🖥️ Screenshots

| Recent Expenses | All Expenses | Add/Edit Expense |
|-----------------|--------------|------------------|
| *Recent 7 days view* | *Complete expense history* | *Easy expense management* |

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ExpenseTrackApp.git
   cd ExpenseTrackApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   # or
   yarn expo start
   ```

4. **Run on your device**
   - Install [Expo Go](https://expo.dev/client) on your mobile device
   - Scan the QR code from your terminal
   - Or press `i` for iOS simulator / `a` for Android emulator

## 🏗️ Project Structure

```
ExpenseTrackApp/
├── 📁 components/           # Reusable UI components
│   ├── 📁 ExpensesOutput/   # Expense display components
│   ├── 📁 ManageExpense/    # Expense form components
│   └── 📁 UI/               # Generic UI components
├── 📁 constants/            # App-wide constants and styles
├── 📁 screens/              # Screen components
├── 📁 store/                # Global state management
├── 📁 util/                 # Utility functions
└── 📄 App.js                # Main app component
```

## 🛠️ Built With

- **[React Native](https://reactnative.dev/)** - Mobile app framework
- **[Expo](https://expo.dev/)** - Development platform
- **[Firebase](https://firebase.google.com/)** - Backend and database
- **[React Navigation](https://reactnavigation.org/)** - Navigation library
- **[Axios](https://axios-http.com/)** - HTTP client
- **[Context API](https://reactjs.org/docs/context.html)** - State management

## 🎯 Core Functionality

### 📱 Navigation Flow
```
Bottom Tab Navigator
├── Recent Expenses (Last 7 days)
├── All Expenses (Complete history)
└── Add Expense (Modal - Stack Navigator)
```

### 🔄 Data Flow
```
User Input → Form Validation → Firebase Storage → Context Update → UI Re-render
```

### 🎨 Key Components

- **ExpenseItem** - Individual expense display with touch navigation
- **ExpenseForm** - Dynamic form for adding/editing expenses  
- **ExpensesOutput** - Wrapper component with summary and list
- **Custom Input** - Reusable input fields with validation
- **IconButton** - Customizable icon buttons

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Update the `BACKEND_URL` in http.js with your Firebase URL

```javascript
const BACKEND_URL = "YOUR_FIREBASE_URL";
```

## 📈 Future Enhancements

- [ ] 🔐 User authentication and profiles
- [ ] 📊 Interactive charts and analytics  
- [ ] 🏷️ Expense categories and tags
- [ ] 💰 Budget setting and alerts
- [ ] 📤 Export data functionality
- [ ] 🌍 Multi-language support
- [ ] 📷 Receipt photo capture
- [ ] 🔔 Push notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Thanks to the React Native community for excellent documentation
- Firebase team for providing robust backend services
- Expo team for simplifying React Native development
- All contributors who helped improve this project

---

⭐ **If you found this project helpful, please give it a star!** ⭐

*Made with ❤️ and React Native*

Similar code found with 2 license types