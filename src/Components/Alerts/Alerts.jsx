import React, { useState, useEffect } from "react";

const Alerts = ({ errorMessages }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        if (errorMessages && errorMessages.length > 0) {
            // Create alert components based on error messages
            const newAlerts = errorMessages.map((message, index) => (
                <div key={index} className="bg-red-500 text-white p-2 rounded mb-2">
                    {message}
                </div>
            ));

            setAlerts(newAlerts);

            // Automatically clear the alerts after 5 seconds
            setTimeout(() => {
                setAlerts([]);
            }, 3000);
        }
    }, [errorMessages]);

    return (
        <div className="fixed top-0 right-0 p-4">
            {alerts}
        </div>
    );
};

export default Alerts;
