import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Committee = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);

  useEffect(() => {
    const fetchCommitteeMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/committee');
        setCommitteeMembers(response.data);
      } catch (error) {
        console.error('Error fetching committee members:', error);
      }
    };

    fetchCommitteeMembers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12">Student Committee</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {committeeMembers.map((member, index) => (
          <div key={index} className="card shadow-sm" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}>
            <figure className="px-10 pt-10">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">{member.name}</h2>
              <p className="text-gray-700">
                {member.designation} - {member.branch} ({member.year})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee; 