import React, { useState, useEffect } from "react";

const Alerts = ({ errorMessages, successMessages }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Ensure that both errorMessages and successMessages are arrays
        const errorMessagesArray = Array.isArray(errorMessages) ? errorMessages : [];
        const successMessagesArray = Array.isArray(successMessages) ? successMessages : [];

        const combinedMessages = [...errorMessagesArray, ...successMessagesArray];

        if (combinedMessages.length > 0) {
            // Create alert components based on both error and success messages
            const newAlerts = combinedMessages.map((message, index) => (
                <div
                    key={index}
                    className={`${errorMessagesArray.includes(message) ? "bg-red-500" : "bg-green-500"
                        } text-white p-2 rounded mb-2`}
                >
                    {message}
                </div>
            ));

            setAlerts(newAlerts);

            // Automatically clear the alerts after 5 seconds
            setTimeout(() => {
                setAlerts([]);
            }, 5000);
        }
    }, [errorMessages, successMessages]);

    return (
        <div className="fixed top-0 right-0 p-4">
            {alerts}
        </div>
    );
};

export default Alerts;
