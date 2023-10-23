import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/App';
import { AuthProvider } from './Context/AuthContext'; // Import the AuthProvider

function App() {
    return (
        <Router>
            {/* Wrap your app with the AuthProvider */}
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Router>
    );
}

export default App;
