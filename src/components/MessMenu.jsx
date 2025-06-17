import React from 'react';

function MessMenu() {
  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: 'rgb(254, 249, 231)' }}>
      <h2 className="text-xl font-semibold mb-4 text-center" style={{ backgroundColor: 'rgb(242, 245, 250)', color: 'black' }}>Hostel Mess Menu</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appqCrQCGaI3idbIa/shrAcQBIQmXcUtDtK"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Hostel Mess Menu Airtable"
      ></iframe>
    </div>
  );
}

export default MessMenu;