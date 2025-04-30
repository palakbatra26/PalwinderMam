import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

export default function RoomAllotment() {
  const { user } = useUser();
  const [roomData, setRoomData] = useState({
    roomNumber: "Loading...",
    floor: "Loading...",
    block: "Loading...",
    roomType: "Loading..."
  });

  // This function will fetch room data from your API
  const fetchRoomData = async () => {
    try {
      // Replace this URL with your actual backend API endpoint
      const response = await fetch('https://your-backend-api.com/api/rooms/' + user?.id);
      const data = await response.json();
      setRoomData(data);
    } catch (error) {
      console.error('Error fetching room data:', error);
      // Show dummy data for demonstration
      setRoomData({
        roomNumber: "Room 101",
        floor: "First Floor",
        block: "Block A",
        roomType: "Double Sharing"
      });
    }
  };

  useEffect(() => {
    if (user) {
      fetchRoomData();
    }
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Room Allotment</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user?.firstName || 'Student'}</h2>
          <p className="text-gray-600">Here you can view and manage your room allotment details.</p>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Your Room Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <p className="font-medium">Room Number</p>
              <p className="text-gray-600">{roomData.roomNumber}</p>
            </div>
            <div className="p-4 border rounded">
              <p className="font-medium">Floor</p>
              <p className="text-gray-600">{roomData.floor}</p>
            </div>
            <div className="p-4 border rounded">
              <p className="font-medium">Block</p>
              <p className="text-gray-600">{roomData.block}</p>
            </div>
            <div className="p-4 border rounded">
              <p className="font-medium">Room Type</p>
              <p className="text-gray-600">{roomData.roomType}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={fetchRoomData}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors mr-4"
          >
            Refresh Data
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
            Request Room Change
          </button>
        </div>
      </div>
    </div>
  );
} 