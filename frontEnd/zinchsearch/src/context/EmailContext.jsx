// EmailContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import  fetchEmails  from "../api/api";

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  async function searchEmails(query) {
    try {
      const data = await fetchEmails(query);
      setEmails(data);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <EmailContext.Provider value={{ emails, selectedEmail, setSelectedEmail, searchEmails }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => useContext(EmailContext)

