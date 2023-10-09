import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Notification from "../Notification/Notification";

const CopyButton = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleCopyClick = (e) => {
        e.preventDefault(); // Prevent the default behavior
        const textToCopy = '8452099123 — UBA Bank'; // Replace with the text you want to copy

        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;

        // Make the textarea invisible
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            // Execute the copy command
            const successful = document.execCommand('copy');
            if (successful) {
                console.log('Text copied to clipboard');
                setShowNotification(true); // Show the notification
            } else {
                console.error('Unable to copy text to clipboard');
            }
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }

        // Clean up
        document.body.removeChild(textArea);
    };

    const handleCloseNotification = () => {
        setShowNotification(false); // Hide the notification
    };

    return (
        <>
            {/* 'copy' icon */}
            <span
                className="bg-[#2488FF80]/50 p-1 rounded-lg transform scale-x-[-1] cursor-pointer"
                onClick={handleCopyClick}
            >
                <IoCopyOutline size={25} />
            </span>

            {showNotification && (
                <Notification
                    message="Text copied to clipboard"
                    onClose={handleCloseNotification} // Pass the onClose function
                />
            )}
        </>
    );
};

export default CopyButton;
