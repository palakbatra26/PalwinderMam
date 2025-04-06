import React from 'react';

function NewsEventItem({ title, isNew, date }) {
  return (
    <div style={{ 
      backgroundColor: '#FFFACD', 
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #EEE8AA', 
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}> 
        <span style={{ marginRight: '10px', fontSize: '1.5em' }}>•</span> 
        {isNew && <span style={{ marginRight: '5px', color: 'blue', fontSize: '1.2em' }}>🆕</span>} 
        <span style={{ color: '#8B4513' }}>{title}</span> 
      </div>
      <span style={{ color: '#8B4513' }}>{date}</span> 
    </div>
  );
}

function NotificationsFormatted({ notifications }) { // Accept 'notifications' prop
  return (
    <div style={{ padding: '20px' }}>
      {notifications.map((notification, index) => (
        <NewsEventItem
          key={index} // Add a unique key for each item
          title={notification.title}
          isNew={notification.isNew}
          date={notification.date}
        />
      ))}
    </div>
  );
}

export default NotificationsFormatted;