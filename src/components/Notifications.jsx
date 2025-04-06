import React from 'react';

function NewsEventItem({ title, isNew, date }) { // Added 'date' prop
  return (
    <div style={{ 
      backgroundColor: '#FFFACD', 
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #EEE8AA', 
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between' // Added to space items
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Container for bullet, new, and title */}
        <span style={{ marginRight: '10px', fontSize: '1.5em' }}>•</span> 
        {isNew && <span style={{ marginRight: '5px', color: 'blue', fontSize: '1.2em' }}>🆕</span>} 
        <span style={{ color: '#8B4513' }}>{title}</span> 
      </div>
      <span style={{ color: '#8B4513' }}>{date}</span> {/* Display date on the right */}
    </div>
  );
}

function NotificationsFormatted() {
  return (
    <div style={{ padding: '20px' }}> 
      <NewsEventItem 
        title="New Hostel Timings: Morning 6:30 AM, Evening 7:00 PM (Effective 1 April 2025)" 
        isNew={true} 
        date="26 March 2025" // Added date prop
      />
    </div>
  );
}

export default NotificationsFormatted;