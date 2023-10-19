import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/App'; // Import the routing configuration

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
