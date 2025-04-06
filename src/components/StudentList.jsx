import React from 'react';
import studentCommitteeData from "../Data/studentCommitteeData.json";
import StudentCard from './StudentCard';

function StudentList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {studentCommitteeData.map((member) => (
        <StudentCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default StudentList;