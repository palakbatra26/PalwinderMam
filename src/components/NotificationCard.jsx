import React from 'react';

function NotificationCard({ notifi }) {
  // Format the date/time from created_at
  const date = new Date(notifi.created_at);
  const formattedDate = date.toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  });

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#22262b',
      color: '#fff',
      padding: '16px',
      marginBottom: '12px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <span style={{ fontSize: '1.1rem', flex: 1 }}>{notifi.Notifications}</span>
      <span style={{ color: '#bbb', fontSize: '0.95rem', marginLeft: '24px', whiteSpace: 'nowrap' }}>{formattedDate}</span>
    </li>
  );
}

export default NotificationCard;
