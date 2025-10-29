# 📱 Task Management System

A full-stack task management application built with Node.js, React, and React Native. This project enables users to create, manage, and synchronize tasks across web and mobile platforms.

## 🎯 Project Overview

This is a comprehensive task management system that allows users to:

- Create and manage tasks with different categories
- Synchronize tasks between web and mobile devices using QR code
- Filter tasks by date (today, week, month, year, or late)
- Track task completion status
- Organize tasks by device using MAC address/IP address

## 🏗️ Architecture

The project is divided into three main parts:

```
├── backend/     # Node.js + Express + MongoDB API
├── web/         # React web application
└── todo/        # React Native mobile application (Expo)
```

## 🛠️ Technologies

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database (via Mongoose)
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **date-fns** - Date manipulation library

### Web Application

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **qrcode.react** - QR code generator
- **date-fns** - Date formatting

### Mobile Application

- **React Native** - Mobile framework
- **Expo** - React Native toolchain
- **React Navigation** - Navigation library
- **Expo Camera** - Camera and barcode scanner
- **Expo Network** - Network utilities
- **Axios** - HTTP client
- **React Native Reanimated** - Animation library
- **NativeWind** - Tailwind CSS for React Native
- **@react-native-community/datetimepicker** - Date/time picker

## 📋 Features

### Core Functionality

- ✅ Create, read, update, and delete tasks
- ✅ Task categories (shopping, work, study, sport, travel, etc.)
- ✅ Task filtering (all, today, week, month, year, late)
- ✅ Task completion status
- ✅ Task synchronization between devices via QR code
- ✅ Late task notifications
- ✅ Responsive design for web and mobile

### Web Features

- Modern UI with Tailwind CSS
- QR code generation for device synchronization
- Real-time task filtering
- Task cards with visual indicators
- Professional color palette and design system

### Mobile Features

- Native mobile UI with React Native
- QR code scanner for device synchronization
- Platform-specific date/time pickers (iOS/Android)
- Offline-capable architecture
- Clean and professional design matching web version

## 🔄 Application Flow

### 1. Device Synchronization

```
Web App → Generate QR Code → Mobile App scans QR →
Store MAC/IP address → All tasks are device-specific
```

### 2. Task Management Flow

```
Create Task → Select Category → Set Title & Description →
Set Date & Time → Save → Filter by Date →
Mark as Done → Delete if needed
```

### 3. API Flow

```
Client (Web/Mobile) → Axios Request → Express Backend →
Validation Middleware → Controller → MongoDB →
Response → Client Updates UI
```

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controller/
│   │   └── TaskController.js    # Business logic
│   ├── middlewares/
│   │   └── TaskValidation.js    # Request validation
│   ├── model/
│   │   └── TaskModel.js         # Mongoose schema
│   ├── routes/
│   │   └── TaskRoutes.js        # API endpoints
│   └── index.js                 # Server entry point
```

### Web Structure

```
web/
├── src/
│   ├── components/              # Reusable components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── TaskCard/
│   │   └── ui/                 # shadcn/ui components
│   ├── views/                  # Page components
│   │   ├── Home/
│   │   ├── Task/
│   │   └── QrCode/
│   ├── services/
│   │   └── api.js              # API client
│   ├── routes/
│   │   └── index.js            # React Router config
│   └── utils/                  # Helper functions
```

### Mobile Structure

```
todo/
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── TaskCard/
│   │   ├── DateTimeInput/     # Platform-specific
│   │   └── ui/                 # Custom UI components
│   ├── views/                  # Screen components
│   │   ├── Home/
│   │   ├── Task/
│   │   └── QrCode/
│   ├── services/
│   │   └── api.js              # API client
│   ├── styles/
│   │   └── global.js           # Global styles & colors
│   └── utils/                  # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Expo CLI (for mobile development)

### Backend Setup

1. Navigate to backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure MongoDB connection in `src/config/database.js`

4. Start the server:

```bash
npm start
```

The API will run on `http://localhost:3002`

### Web Application Setup

1. Navigate to web directory:

```bash
cd web
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The web app will run on `http://localhost:3000`

### Mobile Application Setup

1. Navigate to todo directory:

```bash
cd todo
```

2. Install dependencies:

```bash
npm install
```

3. Update API endpoint in `src/services/api.js` with your machine's IP address:

```javascript
baseURL: "http://YOUR_IP_ADDRESS:3002";
```

4. Start Expo:

```bash
npx expo start
```

5. Scan QR code with Expo Go app or run on emulator

## 🔌 API Endpoints

### Task Management

- `POST /task` - Create new task
- `GET /task/:id` - Get task by ID
- `PUT /task/:id` - Update task
- `DELETE /task/:id` - Delete task
- `PUT /task/:id/:done` - Toggle task completion

### Task Filtering

- `GET /task/filter/all/:macaddress` - Get all tasks
- `GET /task/filter/today/:macaddress` - Get today's tasks
- `GET /task/filter/week/:macaddress` - Get this week's tasks
- `GET /task/filter/month/:macaddress` - Get this month's tasks
- `GET /task/filter/year/:macaddress` - Get this year's tasks
- `GET /task/filter/late/:macaddress` - Get late tasks

## 📊 Data Model

### Task Schema

```javascript
{
  macaddress: String,      // Device identifier
  type: Number,            // Task category (0-9)
  title: String,           // Task title
  description: String,     // Task description
  when: Date,              // Task date and time
  done: Boolean,           // Completion status
  created: Date            // Creation timestamp
}
```

## 🎨 Design System

The application uses a professional color palette:

- **Sage Green** (`#606c38`) - Primary actions
- **Forest Green** (`#283618`) - Headers and dark elements
- **Cream** (`#fefae0`) - Backgrounds
- **Bronze** (`#dda15e`) - Accents and highlights
- **Copper** (`#bc6c25`) - Error states

## 🔐 Security Considerations

- CORS enabled for web application
- Input validation via middleware
- Device-specific task isolation via MAC/IP address
- Environment-specific API endpoints

## 📱 Platform-Specific Features

### iOS

- Native date/time picker
- Safe area handling
- iOS-specific UI elements

### Android

- Native date/time picker
- Material Design influences
- Android-specific navigation

## 🐛 Troubleshooting

### Mobile App Can't Connect to Backend

- Ensure backend is running on port 3002
- Update `baseURL` in `src/services/api.js` with your machine's IP
- Verify firewall allows connections on port 3002
- Ensure mobile device and backend are on the same network

### QR Code Synchronization Issues

- Ensure camera permissions are granted
- Verify QR code format is correct
- Check network connectivity

## 📝 License

ISC

## 👤 Author

**Tiago Sousa**

## 🙏 Acknowledgments

Built as part of a comprehensive full-stack development course covering Node.js, MongoDB, React, and React Native.
