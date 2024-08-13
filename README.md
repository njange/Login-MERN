# Login MERN App

## Project Description
This is a MERN (MongoDB, Express, React, Node.js) stack application. The backend is built with Express and MongoDB, while the frontend is built with React. The application includes a Home component displaying a message indicating successful login.

## Dependencies
### Backend
- Express
- Mongoose
- Cors
- Dotenv

### Frontend
- React
- React DOM

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/njange/Login-MERN.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Login-MERN
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/employee
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:5000` to see the app in action.

## Folder Structure
```
Login-MERN/
├── backend/
│   ├── models/
│   │   └── Employee.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── Home.jsx
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── .gitignore
├── README.md
└── ...
```

## Contributing
Feel free to submit issues and pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.
```

### Summary
- **Project Description**: Describes the MERN stack app.
- **Dependencies**: Lists dependencies for both backend and frontend.
- **Getting Started**: Provides instructions for cloning the repo, installing dependencies, and running both backend and frontend.
- **Folder Structure**: Shows the basic structure of the project.
- **Contributing**: Encourages contributions.
- **License**: Specifies the license.
