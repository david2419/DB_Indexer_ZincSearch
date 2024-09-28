import React, { useContext, useEffect, useState } from 'react';
import { useEmailContext } from '../../context/EmailContext';
import './EmailList.css'

function EmailList({ onEmailSelect }){ 
    const {emails} = useEmailContext();
    console.log("Emails object: ", emails);
    const [filteredEmails, setFilteredEmails] = useState([]);

    useEffect(() => {
        if (emails && emails.hits && emails.hits.hits) { // Verificar la estructura de emails
            console.log("Emails hits: ", emails.hits.hits);
            // Extraer los correos del JSON
            const extractedEmails = emails.hits.hits.map(hit => ({
                date: hit._source.Date || "No Date Available",  // Verificar si Date existe
                from: hit._source.from || "Unknown Sender",     // Verificar si From existe
                to: hit._source.to || "Unknown Recipient",      // Verificar si To existe
                subject: hit._source.subject || "No Subject",   // Verificar si Subject existe
                body: hit._source.Body || "No Content",         // Verificar si Body existe
                cc: hit._source.Cc || "No CC"
            }));

            // Actualizar el estado con los correos extraídos
            setFilteredEmails(extractedEmails);
            console.log(filteredEmails);
        }
    }, [emails]); // Ejecutar cada vez que emails cambie

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmails.map((email, index) => ( 
                        <tr key={index} onClick={() => {
                            console.log("Email selected:", email);  // Verifica que se pasa todo el objeto
                            onEmailSelect(email);                  // Pasa todo el email, incluyendo body y cc
                        }}>
                            <td>{email.date}</td>
                            <td>{email.from}</td>
                            <td>{email.to}</td>
                            <td>{email.subject}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmailList;