import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// List of admin emails that have access to admin panel
const ADMIN_EMAILS = ['palakbatra79@gmail.com'];

export default function AdminPanel() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState('rooms');
  const [rooms, setRooms] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wait for user data to load
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Check if current user is admin
  const isAdmin = user && ADMIN_EMAILS.includes(user.primaryEmailAddress?.emailAddress);

  // If not admin, redirect to home
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  const login = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'palakbatra79@gmail.com',
          password: process.env.REACT_APP_ADMIN_PASSWORD || 'admin123'
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
      } else {
        setError('Login failed: ' + data.message);
      }
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  const fetchData = async () => {
    if (!token) {
      await login();
      return;
    }

    try {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      // Fetch notifications
      const notificationsRes = await fetch('http://localhost:5000/api/notifications', { headers });
      const notificationsData = await notificationsRes.json();
      setNotifications(notificationsData || []);

      // Fetch committee members
      const committeeRes = await fetch('http://localhost:5000/api/student-committee', { headers });
      const committeeData = await committeeRes.json();
      setCommitteeMembers(committeeData || []);

      setLoading(false);
    } catch (err) {
      if (err.message.includes('401')) {
        // Token expired or invalid, try to login again
        localStorage.removeItem('adminToken');
        setToken(null);
        await login();
      } else {
        setError('Failed to fetch data: ' + err.message);
        setLoading(false);
      }
    }
  };

  const handleAddRoom = async (roomData) => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
      });
      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (err) {
      setError('Failed to add room');
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/rooms/${roomId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (err) {
      setError('Failed to delete room');
    }
  };

  const handleAddNotification = async (notificationData) => {
    try {
      const response = await fetch('http://localhost:5000/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(notificationData),
      });
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const data = await response.json();
        setError('Failed to add notification: ' + data.message);
      }
    } catch (err) {
      setError('Failed to add notification: ' + err.message);
    }
  };

  const handleDeleteNotification = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/notifications/${notificationId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const data = await response.json();
        setError('Failed to delete notification: ' + data.message);
      }
    } catch (err) {
      setError('Failed to delete notification: ' + err.message);
    }
  };

  const handleAddCommitteeMember = async (memberData) => {
    try {
      const response = await fetch('http://localhost:5000/api/student-committee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(memberData),
      });
      if (response.ok) {
        fetchData();
      } else {
        const data = await response.json();
        setError('Failed to add committee member: ' + data.message);
      }
    } catch (err) {
      setError('Failed to add committee member: ' + err.message);
    }
  };

  const handleDeleteCommitteeMember = async (memberId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/student-committee/${memberId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        fetchData();
      } else {
        const data = await response.json();
        setError('Failed to delete committee member: ' + data.message);
      }
    } catch (err) {
      setError('Failed to delete committee member: ' + err.message);
    }
  };

  const handleEditCommitteeMember = async (memberId, memberData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/student-committee/${memberId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(memberData),
      });
      if (response.ok) {
        fetchData();
      } else {
        const data = await response.json();
        setError('Failed to edit committee member: ' + data.message);
      }
    } catch (err) {
      setError('Failed to edit committee member: ' + err.message);
    }
  };

  useEffect(() => {
    const initializeAdmin = async () => {
      if (isAdmin) {
        if (!token) {
          await login();
        }
        await fetchData();
      }
    };

    initializeAdmin();
  }, [isAdmin]);

  // Handle token changes
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Admin Panel</h1>
      
      {/* Admin Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('rooms')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'rooms' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-blue-50'
          }`}
        >
          Manage Rooms
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'notifications' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-blue-50'
          }`}
        >
          Manage Notifications
        </button>
        <button
          onClick={() => setActiveTab('committee')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'committee' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-blue-50'
          }`}
        >
          Manage Committee
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {activeTab === 'rooms' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Room Management</h2>
                
                {/* Add Room Form */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleAddRoom({
                    roomNumber: formData.get('roomNumber'),
                    floor: formData.get('floor'),
                    block: formData.get('block'),
                    roomType: formData.get('roomType'),
                  });
                  e.target.reset();
                }} className="space-y-6 bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Room Number</label>
                      <input
                        name="roomNumber"
                        placeholder="Enter room number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
                      <input
                        name="floor"
                        placeholder="Enter floor number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Block</label>
                      <input
                        name="block"
                        placeholder="Enter block name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                      <select
                        name="roomType"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      >
                        <option value="">Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Triple">Triple</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  >
                    Add Room
                  </button>
                </form>

                {/* Room List */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Existing Rooms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(rooms).map(([id, room]) => (
                      <div key={id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="font-semibold text-gray-800">Room: {room.roomNumber}</p>
                        <p className="text-gray-600">Floor: {room.floor}</p>
                        <p className="text-gray-600">Block: {room.block}</p>
                        <p className="text-gray-600">Type: {room.roomType}</p>
                        <button
                          onClick={() => handleDeleteRoom(id)}
                          className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Notification Management</h2>
                
                {/* Add Notification Form */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleAddNotification({
                    title: formData.get('title'),
                    message: formData.get('message'),
                    type: formData.get('type'),
                    date: new Date().toISOString(),
                  });
                  e.target.reset();
                }} className="space-y-6 bg-gray-50 p-6 rounded-lg mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      name="title"
                      placeholder="Enter notification title"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Enter notification message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                      rows="4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      name="type"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="info">Information</option>
                      <option value="warning">Warning</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  >
                    Add Notification
                  </button>
                </form>

                {/* Notifications List */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Notifications</h3>
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-gray-800">{notification.title}</p>
                        <p className="text-gray-600 mt-2">{notification.message}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                            notification.type === 'urgent' ? 'bg-red-100 text-red-800' :
                            notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {notification.type}
                          </span>
                          <button
                            onClick={() => handleDeleteNotification(index)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'committee' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Student Committee Management</h2>
                
                {/* Add Committee Member Form */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleAddCommitteeMember({
                    name: formData.get('name'),
                    designation: formData.get('designation'),
                    year: formData.get('year'),
                    branch: formData.get('branch'),
                    imageUrl: formData.get('imageUrl'),
                  });
                  e.target.reset();
                }} className="space-y-6 bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        name="name"
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                      <select
                        name="designation"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      >
                        <option value="">Select Designation</option>
                        <option value="Mess Head">Mess Head</option>
                        <option value="Creative Head">Creative Head</option>
                        <option value="Welfare Head">Welfare Head</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                      <select
                        name="year"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="D1">D1</option>
                        <option value="D2">D2</option>
                        <option value="D3">D3</option>
                        <option value="D4">D4</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                      <select
                        name="branch"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      >
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                        <option value="B.Arch">B.Arch</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                      <input
                        name="imageUrl"
                        type="url"
                        placeholder="Enter image URL"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  >
                    Add Committee Member
                  </button>
                </form>

                {/* Committee Members List */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Committee Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {committeeMembers.map((member, index) => (
                      <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                          />
                          <div>
                            <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                            <p className="text-blue-600 font-medium">{member.designation}</p>
                            <p className="text-sm text-gray-600">{member.branch} - {member.year}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button
                            onClick={() => handleDeleteCommitteeMember(index)}
                            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}