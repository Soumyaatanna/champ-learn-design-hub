import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';



const UserMessages = () => {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [hasNew, setHasNew] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only fetch messages if dropdown is open
    if (!open) return;
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages');
        if (!res.ok) throw new Error('Failed to fetch messages');
        const msgs = await res.json();
        setMessages(msgs);
        setHasNew(msgs.length > 0);
      } catch (err) {
        setMessages([]);
        setHasNew(false);
      }
    };
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="relative">
      <button className="relative" onClick={() => setOpen((v) => !v)}>
        <span role="img" aria-label="messages">💬</span>
        {hasNew && <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>}
      </button>
      {open && messages.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-10 p-4">
          <h4 className="font-bold mb-2">Admin Messages</h4>
          <ul>
            {messages.map((msg, i) => (
              <li key={i} className="mb-2 border-b pb-1 text-sm">{msg.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMessages;
