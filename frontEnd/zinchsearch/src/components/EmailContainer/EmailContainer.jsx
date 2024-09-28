import React, { useState } from 'react';
import EmailList from '../EmailList/EmailList';
import Body from '../Body/Body';
import "./EmailContainer.css"

function EmailContainer() {
    const [selectedEmail, setSelectedEmail] = useState(null); // To store the selected email
    const [isSearching, setIsSearching] = useState(true); // To manage visibility

    const handleEmailSelect = (email) => {
        setSelectedEmail(email); // Set the selected email
        setIsSearching(false); // Hide Email List
    };

    const handleBackButtonClick = () => {
        setSelectedEmail(null); // Reset the selected email
        setIsSearching(true); // Show Email List again
    };

    return (
        <div className="email-container">
            {isSearching ? (
                <EmailList onEmailSelect={handleEmailSelect} />
            ) : (
                <Body email={selectedEmail} onBack={handleBackButtonClick} />
            )}
        </div>
    );
};

export default EmailContainer;
