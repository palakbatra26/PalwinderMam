import React from 'react';

function StudentCard({ member }) {
  return (
    <div className="card shadow-sm" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}> {/* Added background and text color */}
      <figure className="px-10 pt-10">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{member.name}</h2>
        <p>
          {member.designation} - {member.branch} ({member.year})
        </p>
      </div>
    </div>
  );
}

export default StudentCard;