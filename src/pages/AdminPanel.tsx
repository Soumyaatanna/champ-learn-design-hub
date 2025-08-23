import React, { useState, useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
// import Clerk API client for server-side fetch (for demo, fetch via REST API from frontend)

// Dummy in-memory message store (replace with backend in production)
const messageStore = {
  messages: [],
  sendMessage: function (msg) { this.messages.push(msg); },
  getMessages: function () { return this.messages; }
};

const AdminPanel = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [users, setUsers] = useState([]);

  // Dummy: Only allow admin by email (replace with real admin check)
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'soumyatanna103@gmail.com';

  useEffect(() => {
    // Fetch users from local backend API
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/clerk-users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  const handleSend = async () => {
    if (message.trim()) {
      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: message, from: 'admin' }),
        });
        if (!res.ok) throw new Error('Failed to send message');
        setSent(true);
        setMessage('');
      } catch (err) {
        setSent(false);
        alert('Error sending message');
      }
    }
  };

  if (!isAdmin) return <div className="p-8 text-center">Access denied. Admins only.</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Send Message to All Users:</label>
        <textarea
          className="w-full border rounded p-2 mb-2"
          rows={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className="btn-primary px-4 py-2 rounded" onClick={handleSend}>Send</button>
        {sent && <div className="text-green-600 mt-2">Message sent!</div>}
      </div>
      <div>
        <h3 className="font-semibold mb-2">User List:</h3>
        <ul className="list-disc pl-5">
          {Array.isArray(users) && users.length === 0 && <li>No users found or error fetching users.</li>}
          {Array.isArray(users) && users.map(u => {
            // Clerk API returns email_addresses (array) or emailAddresses (array)
            const email = (u.email_addresses && u.email_addresses[0]?.email_address) || (u.emailAddresses && u.emailAddresses[0]?.email_address) || 'No email';
            const name = u.first_name || u.firstName || '';
            const last = u.last_name || u.lastName || '';
            return <li key={u.id}>{name} {last} ({email})</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
