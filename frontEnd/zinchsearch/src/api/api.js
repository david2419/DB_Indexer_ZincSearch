async function fetchEmails  (searchQuery)  {
    const response = await fetch(`http://localhost:8080/api/email/${searchQuery}`);
    if (!response.ok) throw new Error("Error fetching emails");
    return response.json();
};

export default fetchEmails;