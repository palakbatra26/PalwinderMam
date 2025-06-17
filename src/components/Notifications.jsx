import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseclient';
import NotificationCard from '../components/NotificationCard'; // Correct import

function NotificationsFormatted() {
  const [fetchError, setFetchError] = useState(null);
  const [notifi, setNotifi] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('hostel_notifications')
        .select();

      if (error) {
        setFetchError('Could not fetch the notifications');
        setNotifi(null);
        console.error('Supabase fetch error:', error);
      }

      if (data) {
        setNotifi(data);
        setFetchError(null);
        console.log('Fetched notifications:', data);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {notifi && (
        <ol className="notifications" style={{ padding: 0, margin: 0, listStyle: 'decimal inside', mt: '1rem' }}>
          {notifi.map((item) => (
            <NotificationCard key={item.id} notifi={item} />
          ))}
        </ol>
      )}
    </div>
  );
}

export default NotificationsFormatted;
