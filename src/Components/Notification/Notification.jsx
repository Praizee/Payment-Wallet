import React, { useEffect, useState } from 'react';

const Notification = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 mx-auto p-4 bg-[#2488FF80] text-white rounded-md transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {message}
        </div>
    );
};

export default Notification;
